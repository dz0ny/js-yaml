var path = require('path');
var root_path = path.join(__dirname, '..');
var spec_path = path.join(root_path, 'spec');

require.paths.unshift(
  path.join(root_path, 'spec'),
  path.join(root_path, 'spec', 'lib'),
  path.join(root_path, 'lib')
);

require('jspec')
yaml = require('yaml')

JSpec
  .exec(path.join(spec_path, 'spec.core.js'))
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: path.join(spec_path, 'fixtures'), failuresOnly: true })
  .report()
