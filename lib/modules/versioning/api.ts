import * as amazonMachineImage from './aws-machine-image';
import * as cargo from './cargo';
import * as composer from './composer';
import * as conan from './conan';
import * as debian from './debian';
import * as docker from './docker';
import * as git from './git';
import * as gradle from './gradle';
import * as hashicorp from './hashicorp';
import * as helm from './helm';
import * as hermit from './hermit';
import * as hex from './hex';
import * as ivy from './ivy';
import * as loose from './loose';
import * as maven from './maven';
import * as node from './node';
import * as npm from './npm';
import * as nuget from './nuget';
import * as pep440 from './pep440';
import * as perl from './perl';
import * as poetry from './poetry';
import redhat from './redhat';
import * as regex from './regex';
import * as rez from './rez';
import * as ruby from './ruby';
import * as semver from './semver';
import * as semverCoerced from './semver-coerced';
import * as swift from './swift';
import type { VersioningApi, VersioningApiConstructor } from './types';
import * as ubuntu from './ubuntu';

const api = new Map<string, VersioningApi | VersioningApiConstructor>();
export default api;

api.set(amazonMachineImage.id, amazonMachineImage.api);
api.set('cargo', cargo.api);
api.set('composer', composer.api);
api.set('conan', conan.api);
api.set('debian', debian.api);
api.set('docker', docker.api);
api.set('git', git.api);
api.set('gradle', gradle.api);
api.set('hashicorp', hashicorp.api);
api.set('helm', helm.api);
api.set('hermit', hermit.api);
api.set('hex', hex.api);
api.set('ivy', ivy.api);
api.set('loose', loose.api);
api.set('maven', maven.api);
api.set('node', node.api);
api.set('npm', npm.api);
api.set('nuget', nuget.api);
api.set('pep440', pep440.api);
api.set(perl.id, perl.api);
api.set('poetry', poetry.api);
api.set('redhat', redhat);
api.set('regex', regex.api);
api.set('rez', rez.api);
api.set('ruby', ruby.api);
api.set('semver', semver.api);
api.set('semver-coerced', semverCoerced.api);
api.set('swift', swift.api);
api.set('ubuntu', ubuntu.api);
