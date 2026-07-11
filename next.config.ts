import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Docker 배포용 필수 설정
};

export default nextConfig;
