import url from 'node:url'
import eslintExperimentalApis from 'eslint/use-at-your-own-risk'

const {FlatESLint} = eslintExperimentalApis

for (const cwd of [
  undefined,
  process.cwd(),
  url.fileURLToPath(new URL('test/integration/fixtures/vscode', import.meta.url)),
  url.fileURLToPath(new URL('test/integration/fixtures', import.meta.url)),
  url.fileURLToPath(new URL('test/integration', import.meta.url)),
  url.fileURLToPath(new URL('test', import.meta.url)),
]) {
  console.log()
  console.log('='.repeat(80))
  console.log({cwd})

  try {
    console.log(
      (
        await new FlatESLint({
          overrideConfigFile: true,
          overrideConfig: [
            {rules: {'no-restricted-syntax': ['error', 'Program']}},
          ],
          cwd,
        }).lintFiles('**/bootstrap-amd.js')
      ).map(({filePath}) => filePath)
    )
  } catch (error) {
    console.error(error)
  }

}
