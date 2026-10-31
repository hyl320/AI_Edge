#!/usr/bin/env node
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

// 项目级 + 全局一起装，与 .agents/.codex/.claude/.cline 保持一致
const src = __dirname;
const explicit = process.argv[2];
const target = explicit ? path.resolve(explicit) : process.cwd();
const home = os.homedir();

if (!explicit) {
  console.log('未指定项目路径，项目级将装到当前目录：' + target);
  console.log('如果这不是你的项目根目录，请指定路径：npx @hyl320/ai_edge /path/to/project');
}
console.log('项目目录：' + target);
console.log('全局目录：' + home);

const agents = ['.agents', '.codex', '.claude', '.cline'];

const dests = [];
for (const agent of agents) {
  dests.push(path.join(target, agent, 'skills', 'ai_edge')); // 项目级
  dests.push(path.join(home, agent, 'skills', 'ai_edge'));    // 全局
}

for (const dest of dests) {
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(path.join(src, 'SKILL.md'), path.join(dest, 'SKILL.md'));
  const refSrc = path.join(src, 'references');
  const refDest = path.join(dest, 'references');
  if (fs.existsSync(refSrc)) {
    fs.rmSync(refDest, { recursive: true, force: true });
    fs.cpSync(refSrc, refDest, { recursive: true });
  }
  console.log('installed -> ' + dest);
}

console.log('\n✅ AI_Edge skill 安装完成！');
console.log('可在 Agent 对话中使用 /feasibility 或要求评估任务技术可行性与排雷。');
