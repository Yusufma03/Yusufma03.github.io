# Task Plan: 重构个人网站以提高可维护性

## Goal
重构个人网站，将新闻（news）和论文（publications）移至 JSON 文件动态加载，并将 GIF 压缩为 MP4 以优化性能。

## Current Phase
Phase 1: Requirements & Discovery

## Phases

### Phase 1: Requirements & Discovery
- [x] 理解用户意图
- [x] 识别约束和需求
- [x] 分析 index.html 结构
- [x] 识别需要转换的 GIF
- [x] 在 findings.md 中记录发现
- **Status:** complete

### Phase 2: Planning & Structure
- [x] 定义 JSON 数据架构
- [x] 定义 JS 动态加载方案
- [x] 制定 GIF 转 MP4 方案
- [x] 记录决策和理由
- **Status:** complete

### Phase 3: Implementation
- [x] 创建 JSON 数据文件 (data/news.json, data/publications.json)
- [x] 编写 JS 加载逻辑 (js/load-data.js)
- [x] 修改 index.html 以支持动态加载
- [x] 执行 GIF 到 MP4 的批量转换
- [x] 更新页面中的媒体引用
- **Status:** complete

### Phase 4: Testing & Verification
- [ ] 验证所有新闻和论文正确显示
- [ ] 验证 MP4 视频正常播放且循环
- [ ] 检查移动端适配和加载速度
- [ ] 在 progress.md 中记录测试结果
- **Status:** in_progress

### Phase 5: Delivery
- [ ] 清理冗余代码
- [ ] 最终审查输出文件
- [ ] 向用户交付
- **Status:** pending

## Key Questions
1. 是否需要支持多语言（例如中英文）？
2. 是否有特定的 JSON 结构偏好？
3. GIF 转换 MP4 后是否需要保持自动播放和循环？

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| 使用 JSON 存储数据 | 提高可维护性，方便更新，减少 HTML 冗长 |
| GIF 转 MP4 | 显著减小文件体积，提高页面加载速度 |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
|       | 1       |            |

## Notes
- Update phase status as you progress: pending → in_progress → complete
- Re-read this plan before major decisions (attention manipulation)
- Log ALL errors - they help avoid repetition
