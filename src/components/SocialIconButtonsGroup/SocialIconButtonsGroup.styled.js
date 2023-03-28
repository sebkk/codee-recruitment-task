import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ orientationVertical }) =>
		orientationVertical ? 'column' : 'row'};
	align-items: ${({ orientationVertical }) => !orientationVertical && 'center'};
	justify-content: ${({ orientationVertical }) =>
		orientationVertical && 'center'};
	gap: ${({ gap }) => gap || '40px'};
`
