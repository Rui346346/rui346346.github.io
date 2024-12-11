
# 引用文章

要在引用的文章中对某句话进行批注，<p class="annotation-target" data-comment="这是批注内容。">这是一段需要批注的文字。</p>
可以使用HTML标签来实现。以下是一个示例：

1. **创建引用文章的Markdown文件**：
   - 将你想引用的文章内容保存为一个Markdown文件。例如，将文章保存为`article.md`。

2. **在自己的Markdown文件中引用文章**：
   - 使用Jekyll的`include`标签在自己的Markdown文件中引用文章内容。例如，在你的Markdown文件中添加以下内容：

3. **在引用的文章中添加批注**：
   - 在`article.md`文件中使用HTML标签添加批注。例如：

     ```markdown
     这是引用文章中的一句话。<span title="这是批注内容">[批注]</span>
     ```

4. **在自己的Markdown文件中显示引用文章和批注**：
   - 在自己的Markdown文件中引用`article.md`，并确保批注能够正确显示。例如：

5. **配置Jekyll**：
确保你的Jekyll配置文件（_config.yml）中包含以下配置，以便Jekyll能够正确处理include标签：

```markdown
include:
  - article.md
```

以下是一个完整的示例：

**article.md**：

```markdown
这是引用文章中的一句话。<span title="这是批注内容">[批注]</span>
```

**自己的Markdown文件**：

通过这种方式，你可以在引用的文章中对某句话进行批注，并在自己的Markdown文件中显示出来。
