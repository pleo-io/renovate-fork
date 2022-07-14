import { load } from 'js-yaml';

import { logger } from '../../../logger';
import { GithubReleasesDatasource } from '../../datasource/github-releases';
import type { PackageDependency, PackageFile } from '../types';

export function extractPackageFile(content: string): PackageFile {
  logger.trace('pleo.extractPackageFile()');

  const deps: PackageDependency[] = Object.entries(load(content)).map(
    ([depName, currentValue]) => ({
      depName,
      currentValue,
      datasource: GithubReleasesDatasource.id,
    })
  );

  return { deps };
}
