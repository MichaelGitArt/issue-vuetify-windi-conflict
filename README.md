# Vuetify and nuxt-windicss

nuxt-windicss brokes styles with custom variables in vuetify.

## Steps to reproduce

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/MichaelGitArt/issue-vuetify-windi-conflict)


1. `yarn install`
2. `yarn dev` - should work fine, check it out.
3. uncomment the 'nuxt-windicss' line in `nuxt.config.ts`
4. All vuetify styles are broken. (with ssr true, app doesn't even work)