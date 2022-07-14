import { GithubReleasesDatasource } from '../../datasource/github-releases';
import * as semverVersioning from '../../versioning/semver';
import { extractPackageFile } from './extract';
import { updateArtifacts } from './artifacts';

export { extractPackageFile, updateArtifacts };

export const supportedDatasources = [GithubReleasesDatasource.id];
export const defaultConfig = {
  fileMatch: ['(^|/)\\.pleo-crazy-version$'],
  versioning: semverVersioning.id,
};
