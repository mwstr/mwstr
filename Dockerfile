# To use this Dockerfile, you have to set `output: 'standalone'` in your next.config.mjs file.
# From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM oven/bun:1.2.2-alpine AS base
WORKDIR /app

FROM base AS bins
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# Also https://github.com/oven-sh/bun/issues/16915
RUN apk add --no-cache libc6-compat make g++ python3

# Install dependencies only when needed
FROM bins AS deps
COPY package.json bun.lock* ./
RUN bun i --frozen-lockfile

# Rebuild the source code only when needed
FROM deps AS builder
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# Production image, copy all the files and run next
FROM base AS runner

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1

# Remove this line if you do not have this folder
# COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER bun

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENTRYPOINT ["bun", "server.js"]
