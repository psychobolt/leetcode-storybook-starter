import { createRequire } from 'module';
import { execa } from 'execa';

const require = createRequire(import.meta.url);

await (execa('yarn', ['yo', require.resolve('generator-leetcode-storybook')], { stdio: 'inherit' }));
