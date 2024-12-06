import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FC } from "react";

type Props = {
	isLoading: boolean;
	onTransitionEnd: VoidFunction;
};

const load = keyframes`
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
`;

const StyledLoader = styled.div<Props>`
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;
	background: bg-black-200;
	opacity: ${(p) => (p.isLoading ? 1 : 0)}; /* Set opacity based on isLoading */
	transition: opacity 0.3s; /* Transition only the opacity */

	::after {
		content: "";
		width: 40px;
		height: 90px;
		display: inline-block;
		left: 5px;
		position: relative;
		border: 2px solid #fff;
		box-sizing: border-box;
		animation: ${load} 1.5s linear infinite alternate;
		color: #0070f3;
		transform: perspective(140px) rotateX(-45deg);
	}
`;

export const Loader: FC<Props> = ({ isLoading, onTransitionEnd }) => (
	<StyledLoader
		id="loader"
		onTransitionEnd={onTransitionEnd}
		isLoading={isLoading}
	/>
);
