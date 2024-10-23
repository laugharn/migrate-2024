## Migrate 2024 Worskhop

The purpose of this repo is to demonstrate migrating from Pages Router to App Router. We are using PNPM as our package manager, and Sanity as our CMS.

## Up and Running

If you would like to use a package manager other than PNPM, feel free! Just update the commmands below to NPM or Yarn.

1. Run `pnpm install` to install dependencies.
2. Copy .env.example to .env and set the values with your Sanity configuration.
3. Run `pnpx sanity dataset import sanity/seed.ndjson` to add some seed content to your Sanity instance.
4. Run `pnpm run dev` to get started developing.
5. Visit `http://localhost:3000` to view your site, and `http://localhost:3000/studio` to use Sanity Studio.
