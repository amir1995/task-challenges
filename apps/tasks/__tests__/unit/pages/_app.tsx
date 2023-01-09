import { render } from '@testing-library/react'

import App from '../../../pages/_app'

describe('Root App Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <App router={{} as any} pageProps={{ }} Component={() => <div>Test _app</div>} />
    )
    expect(getByText('Test _app')).toBeInTheDocument()
  })
})
