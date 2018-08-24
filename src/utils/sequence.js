const sequence = (options = { start: 0, step: 1 }) => {
  let current = options.start

  return {
    next: () => (current += options.step)
  }
}

export default sequence
