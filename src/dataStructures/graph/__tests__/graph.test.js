const Graph = require('../graph')

const graph = new Graph()
describe('Graph', () => {
  it('Should add vertices', () => {
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (var i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i])
    }

    expect(graph.vertices.length).toBe(9)
    expect(graph.adjList.items).toHaveProperty('A')
  })

  it('Should add Edges', () => {
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('E', 'I')

    expect(graph.adjList.items.A).toStrictEqual(['B', 'C', 'D'])
    expect(graph.adjList.items.D).toStrictEqual(['A', 'C', 'G','H'])
    expect(graph.adjList.items.I).toStrictEqual(['E'])
  })

  it('Should do a breadth-first search', () => {
    let string = ''

    graph.bfs('A', (v) => {
      string += v
    })

    expect(string).toBe('ABCDEFGHI')
  })

  it('Should do a depth-first search', () => {
    let string = ''

    graph.dfs((v) => {
      string += v
    })

    expect(string).toBe('ABEIFCDGH')
  })
})
