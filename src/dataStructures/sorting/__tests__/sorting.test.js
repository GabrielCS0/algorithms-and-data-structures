const Sorting = require('../sorting')

describe('Sorting', () => {
  it('Bubble Sort', () => {
    const sorting = new Sorting()
    sorting.insert(5)
    sorting.insert(4)
    sorting.insert(3)
    sorting.insert(2)
    sorting.insert(1)

    sorting.bubbleSort()
    expect(sorting.toString()).toBe('1,2,3,4,5')

  })

  it('Selection Sort', () => {
    const sorting = new Sorting()
    sorting.insert(5)
    sorting.insert(4)
    sorting.insert(3)
    sorting.insert(2)
    sorting.insert(1)

    sorting.selectionSort()
    expect(sorting.toString()).toBe('1,2,3,4,5')
  })

  it('Insertion Sort', () => {
    const sorting = new Sorting()
    sorting.insert(5)
    sorting.insert(4)
    sorting.insert(3)
    sorting.insert(2)
    sorting.insert(1)

    sorting.insertionSort()
    expect(sorting.toString()).toBe('1,2,3,4,5')
  })

  it('Merge Sort', () => {
    const sorting = new Sorting()
    sorting.insert(8)
    sorting.insert(7)
    sorting.insert(6)
    sorting.insert(5)
    sorting.insert(4)
    sorting.insert(3)
    sorting.insert(2)
    sorting.insert(1)

    sorting.mergeSort()
    expect(sorting.toString()).toBe('1,2,3,4,5,6,7,8')
  })

  it('Quick Sort', () => {
    const sorting = new Sorting()
    sorting.insert(5)
    sorting.insert(4)
    sorting.insert(3)
    sorting.insert(2)
    sorting.insert(1)

    sorting.quickSort()
    expect(sorting.toString()).toBe('1,2,3,4,5')
  })
})
