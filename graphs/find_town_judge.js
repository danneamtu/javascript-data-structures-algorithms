/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => {
  const graph = {};

  for (let i = 1; i <= N; i++) {
    graph[i] = new Set();
  }

  for (let person of trust) {
    graph[person[0]].add(person[1]);
  }

  let potential_judge = null;

  for (let key in graph) {
    if (graph[key].size === 0) {
      potential_judge = key;
    }
  }

  if (!potential_judge) {
    return -1;
  }

  console.log('graph', graph);
  console.log('judge', potential_judge);

  for (let key_check in graph) {
    if (graph[key_check].has(+potential_judge)) {
      continue;
    } else {
      console.log('keycheck', key_check);
      if (key_check === potential_judge) {
        continue;
      } else {
        return -1;
      }
    }
  }

  return potential_judge;
};


// time complexity of O(trust) where trust is the length of trust array.
// space complexity of O(N), where N is the number of nodes