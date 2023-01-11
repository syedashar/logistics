const NextFederationPlugin = require("@module-federation/nextjs-mf");
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {

    // // Note: Here you can consume exposed pages/components/function

    main: `main@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({

        // // Note: Here you can expose pages/components/function

        name: "logistic",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./vending": "./pages/vending/index.js",
          "./locker": "./pages/locker/index.js",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
