const pathsToTree = (arr) => {
  let tree = {}

  const recurse = (path, ind, node) => {
    let item = path[ind]
    if (!item.includes('.')) {
      if (!node.hasOwnProperty(item)) {
        node[item] = {files: []}
      }
      recurse(path, ind+1, node[item])
    } else {
      node.files.push(item)
    }
  }

  arr.forEach((path) => {
    let path = path.split('/')
    recurse(path, 0, tree)
  })


}

var array = [
  "d1/d2/d3/file1.txt",
  "d1/d2/d3/file2.txt",
  "d2/d3/file3.txt",
  "d3/file4.txt",

  "d1/d2/first.png",
  "d2/second.png",

  "d1/photo1.jpg",
  "d1/photo2.jpg",

  "animate.gif"
];