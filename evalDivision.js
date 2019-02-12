/*
Equations are given in the format A / B = k, where A and B are variables represented as strings, 
and k is a real number (floating point number). Given some queries, return the answers. 
If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0. 
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? . 
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , 
where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
*/

const evalDivision = (equations, values, queries) => {
  let nodes = {}

  //create the nodes from the equations and queries
  //grab the i for the cost of the edge from the values array
  equations.forEach((edge, i) => {
    edge.forEach((label, isLower) => {
      if (!nodes[label]) nodes[label] = new Map
      if (!isLower) {
        nodes[label].set(edge[1], values[i])
      } else {
        nodes[label].set(edge[0], (1 / values[i]))
      }
    })
  })

  let paths = []
  //console.log(nodes)

  //map out the possible pathways
  Object.keys(nodes).forEach((node) => {
    let inPath = false
    paths.forEach((path, i) => {
      if (path.includes(node)) inPath = i
    })
    // console.log(node)
    
    const recurse = (n, p) => {
      for (let [k, v] of nodes[n]) {
        if (!p.includes(k)) {
          p.push(k)
          recurse(k, p)
        }
      }
    }

    if (!(typeof inPath === 'number')) {
      paths.push([node])
      recurse(node, paths[paths.length-1])
    }
  })

  // console.log(paths)
  
  let results = []

  queries.forEach((query) => {
    let nodeKeys = Object.keys(nodes)
    let start = query[0]
    let target = query[1]
    let q = []

    //makes sure the start and target are within the same graph
    let pathOfStart
    let pathOfTarget
    paths.forEach((path, i) => {
      if (path.includes(start)) pathOfStart = i
      if (path.includes(target)) pathOfTarget = i
    })
    
    //check for edge cases
    //if asking for a node that hasn't been supplied
    if (!nodeKeys.includes(start) || !nodeKeys.includes(target)) results.push(-1)
    //if in different graphs
    else if (pathOfTarget !== pathOfStart) results.push(-1)
    //if it is the same
    else if (start === target) results.push(1)
    else {
      //initialize q
      for (var [k, v] of nodes[start]) {
        q.push([k,v])
      }

      while (q[0][0] !== target) {
        //snag first item from q
        let item = q.shift()
        for (let [k, v] of nodes[item[0]]) {
          //for each neighbor, make a new pair, but update the cost to the current cost
          let toPush = [k, v]
          toPush[1] *= item[1]
          q.push(toPush)
        }
      }
      //finally the first item in the q will be the target, with a  modified cost.
      results.push(q[0][1])
    }
  })

  return results
}

// let e = [ ["a", "b"], ["b", "c"] ]
// let f = [['a','b'], ['c','d']]
// let v = [2.0, 3.0]
// let q = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]

// // console.log(evalDivision(e, v, q))
// console.log(evalDivision(f, v))