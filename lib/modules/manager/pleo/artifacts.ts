import type { UpdateArtifact, UpdateArtifactsResult } from '../types';
import { logger } from '../../../logger';
import {
  getSiblingFileName,
  ensureLocalDir,
  localPathExists,
  writeLocalFile,
} from '../../../util/fs';

export async function updateArtifacts({
  packageFileName,
  updatedDeps,
  newPackageFileContent,
  config,
}: UpdateArtifact): Promise<UpdateArtifactsResult[] | null> {
  logger.debug(`pleo.updateArtifacts(${packageFileName})`);

  const res: UpdateArtifactsResult[] = [];

  console.log({
    packageFileName,
    updatedDeps,
    newPackageFileContent,
    config,
  });

  const testFile = getSiblingFileName(packageFileName, 'testfile.txt');
  const testContents = String(new Date());
  await writeLocalFile(testFile, testContents);

  res.push({
    file: {
      type: 'addition',
      path: testFile,
      contents: testContents,
    },
  });

  return res;
}
