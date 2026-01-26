# Findings & Decisions

## Requirements
- **数据解耦**: 将 `news` 和 `publications` 从 `index.html` 中抽离，存储在 JSON 文件中。
- **动态加载**: 使用 JavaScript 在页面加载时读取 JSON 并渲染内容。
- **媒体优化**: 将所有 GIF 动画转换为 MP4 格式以减少带宽占用。
- **可维护性**: 确保新增内容只需修改 JSON 文件，无需频繁修改 HTML。

## Research Findings
- 网站目前的结构是将所有内容硬编码在 `index.html` 中。
- `data/` 目录下已经存在许多子目录，每个目录通常包含论文的图片/GIF 和 BibTeX 文件。
- `projects/hdp/static/videos/` 下已经有一些 MP4 文件，说明项目已有使用 MP4 的先例。
- 识别出的 GIF 文件列表：
    - `data/cheang2025gr3/gr3.gif`
    - `data/chen2023dax/daxbench.gif`
    - `data/chen2023ild/ild.gif`
    - `data/chernyadev2024bigym/bigym.gif`
    - `data/li2025grrl/gr_rl.gif`
    - `data/ma2020contrastive/walker.gif`
    - `data/ma2020discriminative/dpfrl.gif`
    - `data/ma2024hierarchical/hdp.gif`
    - `data/mazzaglia2024redundancy/erj.gif`
    - `data/ren2023insactor/insactor.gif`
    - `data/teoh2024green/greenaug.gif`
    - `data/tian2025bytewrist/bytewrist.gif`
    - `data/wen2025dexter/dexter.gif`

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| 使用 JSON 存储数据 | 结构化存储，易于通过脚本处理，且 JS 原生支持解析。 |
| 使用 Fetch API 加载数据 | 无需依赖外部库，现代浏览器支持良好。 |
| 使用 ffmpeg 进行格式转换 | 业界标准的视频处理工具，支持批量操作。 |
| JSON 结构设计 | `news` 采用简单列表，`publications` 采用详细对象（含作者、链接、媒体路径等）。 |

## JSON Schema 设计建议
### News
```json
{
  "date": "string",
  "content": "string (html support)",
  "isMore": "boolean"
}
```

### Publications
```json
{
  "title": "string",
  "venue": "string",
  "authors": [
    { "name": "string", "url": "string (optional)", "isMe": "boolean", "isEqual": "boolean" }
  ],
  "image": "string",
  "video": "string (optional)",
  "links": [
    { "label": "string", "url": "string" }
  ]
}
```

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| 暂无 | |

## Resources
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Visual/Browser Findings
- 需要观察 `index.html` 以确定具体的 HTML 类名和结构。

---
*Update this file after every 2 view/browser/search operations*
*This prevents visual information from being lost*
