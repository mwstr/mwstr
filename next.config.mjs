import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    turbo: true,
  },
}

export default withPayload(nextConfig)
