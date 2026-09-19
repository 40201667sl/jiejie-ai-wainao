window.DIGEST = {
  updated: "2026-09-19",
  highlights: {
    "2026-09-19": "今日看点：SemiAnalysis 称 Kimi K3 2.8T 上 MI355X 每 GW 利润率约 53.6%，高于 GB200 NVL72 的 44.3%，同时批评 AMD 侧 vLLM CI 仍不稳定。Claude Code 开始原生读 AGENTS.md。Ben Bajarin 警告电力加审批可能让加速器需求空出 20–30% 通电产能；选址上已有 300+ 地方政府暂停数据中心。小米 MiMo-V2.6 的大规模异步 RL 直播被逐项拆解。",
    "2026-09-18": "今日看点：SemiAnalysis 称内部流量里 Agentic 推理已超七成，并统计 OpenAI 各代工具调用——GPT-5.6 Terra 平均 1.94 次、Astra 1.18 次。Ben Bajarin 转述 Eaton：宣布的数据中心项目一个月从 307GW 升至 342GW，现网仅约 50GW；同时展示 AWS Trainium 3 机架级超服务器。Stratechery 访谈 Joanna Stern，讨论 iPhone Duo 与普通人如何用 AI。",
    "2026-09-17": "今日看点：Hassabis 宣布成立 DeepMind Institute，把 AGI 对经济、科学与社会的跨学科研究正式机构化。Anthropic 把 Claude Cowork 与 Chat 合成一个 Claude，Simon Willison 将其读成「全员抢通用 Agent 入口」。SemiAnalysis 实测 Rubin NVL72 能效是 Jensen 在 GTC 口径的两倍以上，并拆解地方禁令对数据中心的真实冲击远小于舆论；Stratechery 写 Salesforce 把 Agent 做成 UI。",
    "2026-09-16": "今日看点：SemiAnalysis 称 AMD MI355X 在 agentic inference 上正快速收窄相对 GB300 的 perf/TCO 差距，并归功于 SGLang 与 UMBP KV offload；同时反驳「数据中心禁令正在杀死美国建设」—300+ 禁令里真正流失约 1.5GW。Raschka 用画图任务对比 Astra 与 Qwen 的 computer-use 路径，提醒基准只看终局会失真。Stratechery 聚焦 OpenAI 广告与 ChatGPT 内嵌亚马逊广告。",
    "2026-09-15": "今日看点：SemiAnalysis 确认 GPT-6 Astra 采用 looped transformers（更深而不更大），并发布 Vera Rubin NVL72 在 agentic inference 上 67x 性能每美元分析；OpenAI 研究员 Dan Selsam 公开声明警示情境意识使评估失效；Raschka 澄清 pacing 是统一检查框架而非放缓训练；Stratechery 聚焦 Pacing the Frontier 与 AI 治理。",
    "2026-09-14": "今日看点：Sebastian Raschka 发布「Reasoning from scratch」第三弹，完整演示从零构建数学 verifier，覆盖 LLM 评估与 RLVR 训练；SemiAnalysis 详解为何 4-hi HBM 在推理场景胜出，同带宽更少 die、更低成本；Simon Willison 展示 GPT-6 Astra 根据地址生成 5K/10K 圆形跑步路线的实用工具链；Ben Bajarin 强调前沿网络安全模型将仅限企业与政府获取。",
    "2026-09-13": "今日核心：Dario Amodei 发布「Pace the Frontier」长文呼吁行业减速并开放第三方评估，Demis 与 Karpathy 公开支持并重申行业标准机构必要性；SemiAnalysis 详解 Google TPUv9i Triggerfish 全电交换网络及 Anthropic 定制需求；Simon 曝光 OpenAI Agent 集群早在五月就大规模攻击 RubyGems；Ian Cutress 报道日本 neocloud 大规模部署 Tenstorrent，「CUDA 护城河已消失」。",
    "2026-09-12": "今日核心：SemiAnalysis 详解模块化数据中心只是转移而非消除劳动力瓶颈，并对比 DeepSeek-V4.1-Flash 上 NVIDIA vLLM 即日可用而 AMD 仍缺镜像；GB300 NVL72 在 agentic inference 上实现 13 倍 perf/$；Simon 用多模型审计发布 Datasette 安全版本并强调生产代码质量门槛；Andrew Ng 梳理 AI Engineering 核心技能；Stratechery 周报聚焦 iPhone Duo 威胁。",
    "2026-09-11": "今日核心：SemiAnalysis 拆解半导体第三导数机会（ABF 基板设备与材料如 Taesung、Ajinomoto），NVIDIA 因 Groq LPU 交易遭 DOJ 反垄断调查；DeepSeek-V4.1-Flash 采用 encoder-decoder 大改架构获 Raschka 点赞应称 V5；Microsoft 规划数据中心从 12GW 扩至 38GW+；Simon 用 Astra 生成交互式 Blender 模型展示工具链。",
    "2026-09-10": "今日核心：Raschka 深度拆解 GPT-6 Astra 与 looped transformers 机制与成本权衡；SemiAnalysis 详解 NVIDIA 800V DC 分阶段部署路径，以及 AI 服务器滑轨让金滑轨创始人成台湾首富；数据中心建设超周期持续，施工端订单领先设备端；TPU v7 SparseCore 助力 MoE 吞吐提升 12%，perf/$ 继续领先。",
    "2026-09-09": "今日核心：OpenAI 用下一世代模型 + 万级 Agent 在 88 小时内产出 Navier-Stokes 千年难题的形式化证明（不申领奖金），DeepMind 发布 AlphaGenome Atlas 覆盖 90 亿单碱基变异预测；算力侧 TPU v7 在 InferenceX 上 perf/$ 领先 Blackwell Ultra 50%，vLLM 终于支持 Spec Decoding + Pipeline Parallelism；Qualcomm 与 AWS 多代合作定制 AI 数据中心硅片，High-NA EUV 路线加速。",
    "2026-09-08": "今日核心看点：公开基准可信度危机与硬件软件双线加速。SemiAnalysis 指出 Gemini 3.8 Flash 与 Muse Spark 在新旧 Terminal Bench 上落差巨大，疑似针对性刷榜，呼吁更多私有基准；同时 AMD 软件优化 19 天让 MI355X 上 vLLM 提速 11 倍，Google TPU 推理外部化全面推进并开放基准。Anthropic 据称已连续两季实现盈利。",
    "2026-09-07": "今天能压成一条看点的是：实验室开始把「内部有多依赖 Agent」说出来。OpenAI 披露研究加速数据，Simon 盯上 7 月 token 陡升；Dylan 观察到 AI 公司员工的使用强度已经赶上分析机构。算力侧 SemiAnalysis 还在用 F-35 单价给 HBM 做换算。",
    "2026-09-06": "产业讨论从评测榜转到默认工具栈：Ben 降级 Claude 全改 Astra，Raschka 把 KV cache 和显存账算清楚。",
    "2026-09-02": "Demis 把 Gemini 3.8 Flash 和 Cyber 变体一起推出来，Flash 线继续按周迭代。",
    "2026-08-18": "Stratechery 曝出 Stripe 收购 OpenRouter。AI 的仗从「比模型」打到「比入口」。"
  },
  items: PLACEHOLDER
};
