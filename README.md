<p align="center">
  <a href="#english">English</a> · <a href="#zh">中文</a>
</p>

<a id="english"></a>

# AI_Edge

> **Feasibility gate, capability boundary, and delivery link triage skill for AI agents.**  
> Find route-deciding evidence before heavy investment; report exact verified boundaries upon delivery. Avoid reckless commitments and premature denials.

---

## Overview

When tackling high-uncertainty or specialized engineering tasks (e.g., reverse engineering, closed firmware/ROM modification, unusual build toolchains, cross-platform porting), LLMs tend to fail in two ways:

1. **Reckless commitment**: Promising success without checking critical verification links (CRCs, signatures, toolchain boundaries), hitting a dead end halfway through, and wasting hours of engineering time.
2. **Premature denial**: Quitting upon the first error or missing official tool, prematurely claiming "impossible for AI" or "impossible in industry" without evidence.

**AI_Edge** introduces a systematic 5-step triage framework:
- **Clarify Acceptance Targets**: Observable acceptance criteria distinguishing prototypes from complete deliveries.
- **Identify Route-Deciding Unknowns**: Five-stage link analysis (Inputs & Modifications, Build & Packaging, Runtime Environment, Validation & Loading, User Acceptance).
- **Minimum Viable Verification**: Test the hypothesis most likely to overturn the route first on an isolated replica.
- **Update Conclusions**: Four unambiguous states (`Verified Feasible`, `Conditionally Feasible`, `Pending Verification`, `Current Path Blocked`).
- **Evidence-Based Delivery**: Honest, multi-layer verification status reports.

---

## Installation

Clone to your project or global agent skills directory:

```bash
# Antigravity / Claude Code / Codex / General Agent framework
git clone https://github.com/hyl320/AI_Edge.git ~/.agents/skills/ai_edge

# Or project-level:
git clone https://github.com/hyl320/AI_Edge.git .agents/skills/ai_edge
```

---

<a id="zh"></a>

# AI_Edge (AI 任务可行性门禁与全链路排雷技能)

> **评估技术可行性、当前执行能力与完整交付路径的 Agent Skill。**  
> 在大量投入前找到决定路线的证据，在交付时说明实际验证到哪里。避免盲目承诺，也避免在证据不足时过早否定。

---

## 核心理念

大模型在处理非标准、高复杂度任务（如逆向工程、封闭产物/固件修改、跨环境交付、定制打包等）时，容易陷入两种极端：

1. **盲目承诺**：不查证底层校验机制与工具链约束，承诺过满，半路卡死造成巨大时间损失。
2. **过早否定**：遇到表层报错或官方工具缺失，就主观断言“大模型做不到 / 行业做不到”。

**AI_Edge** 提供了一套五步闭环的排雷与验证机制：

1. **明确验收目标**：梳理可观察的验收条件，区分原型、局部验证与完整交付。
2. **定位决定性未知项**：按“全链路五阶段”排查决定性依赖：
   - **输入与修改**：输入是否足够？能否定位并修改目标？
   - **构建与打包**：产物如何生成？依赖何种工具链？
   - **运行环境**：产物能否在指定设备与架构下工作？
   - **校验与加载**：谁在检查什么？是校验和、CRC 还是数字签名？
   - **用户验收**：能否完成端到端核心操作？
3. **先做最小验证**：优先验证失败后最容易推翻全局路线的未知项，在副本上做最小可逆实验。
4. **分类研判状态**：
   - `已验证可行`
   - `有条件可行`
   - `待验证`
   - `当前路径受阻`
5. **按结果验收汇报**：交付物、已验证环节与未覆盖范围如实透明陈述。

---

## 目录结构

```
AI_Edge/
├── SKILL.md                 # Agent 核心指令与规范
├── references/              # 参考案例与排雷指引
│   └── kof97-rom.md         # 街机 ROM / 封闭产物修改排雷实战案例
├── README.md                # 技能说明文档
├── LICENSE                  # 开源协议 (MIT)
└── .gitignore
```

---

## 协议

[MIT License](LICENSE) © 2026 hyl320
