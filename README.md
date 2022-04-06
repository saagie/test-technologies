# Warning

This repository contains **TEST technologies** to work with Saagie. These technologies are **NOT for production use**, only testing different behaviour around declaring technologies in Saagie.

If you are looking for technologies to include in Saagie, see the [official repository](https://github.com/saagie/technologies).

# Saagie Test Technologies

## Developement

Development should be done in its own dedicated branch.

To test the build of the technology, use one of the `gradle` tasks `localBuildModifiedApps` or `localBuildModifiedJobs`.

Pushing commits will trigger a Github Action, it will build the branch and make a `Pre-release` tag with the associated assets, ready to be tested in any Saagie environment.

## Release Cycle

From the development branch, enter the review phase by opening a PR against the branch `master`.

Once the review done, close and merge the PR into `master`, a Github Action will build a new release and delete the pre-release artifacts.
