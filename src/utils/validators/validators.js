
export const required = value => (value ? undefined : 'Required')

export const maxLengthCreator = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined