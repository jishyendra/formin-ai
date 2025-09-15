import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	images: {
		remotePatterns: [
			{
				protocol: "https", // Recommended to only allow HTTPS for security
				hostname: "**", // Wildcard to match any domain
			},
		],
	},
};

export default nextConfig;
