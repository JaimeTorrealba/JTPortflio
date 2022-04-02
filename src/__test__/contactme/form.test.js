import { render } from '@testing-library/vue'

import Title from '../../components/common/Title.vue'

describe('first test', () => {
    it('recibe un valor', () => {
        const msg = 'My title'
        render(Title, {
            props: { msg },
        })
    })
})
