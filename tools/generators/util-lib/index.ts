import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  console.log(schema, '<------- hier')
  console.log(tree, '<------- tree')
  await libraryGenerator(tree, { name: `${schema.directory}/util-${schema.name}`,
    tags: `scope:${schema.directory},type:util`
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
