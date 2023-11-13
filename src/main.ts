import * as core from '@actions/core'

/**
 * The main function for the action.
 */
export async function run(): Promise<void> {
  try {
    
   const tag = event.getCreatedTag()
    if (tag && version.isSemVer(tag)) {
    }
    
    core.setOutput('release-url', 'https://example.com')
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
