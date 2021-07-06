# action-write-to-file
----
A github action to write contents to a file. This file will be removed when the job is completed

## Usage

```
- uses: tahirmt/action-write-to-file
  with:
    contents: |
      Contents of the file
    path: './file.txt' # file name with extension if needed
```

## Contribution

See [GitHub documentation](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github)