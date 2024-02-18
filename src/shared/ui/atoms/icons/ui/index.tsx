import { withDefaultProps } from "../lib";

export const Cross = withDefaultProps(({ size, fill, ...props }) => (
		<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
		>
			<path
					d="M5.26363 5.2636C5.6151 4.91213 6.18495 4.91213 6.53642 5.26361L12 10.7272L17.4636 5.26363C17.8151 4.91216 18.385 4.91216 18.7364 5.26363C19.0879 5.6151 19.0879 6.18495 18.7364 6.53642L13.2728 12L18.7364 17.4636C19.0879 17.8151 19.0879 18.385 18.7364 18.7364C18.3849 19.0879 17.8151 19.0879 17.4636 18.7364L12 13.2728L6.53639 18.7364C6.18492 19.0879 5.61507 19.0879 5.2636 18.7364C4.91213 18.3849 4.91213 17.8151 5.26361 17.4636L10.7272 12L5.26363 6.53639C4.91216 6.18492 4.91216 5.61507 5.26363 5.2636Z"
					fill={fill}
			/>
		</svg>
));

export const Plus = withDefaultProps(({ size, fill, ...props }) => (
		<svg
				width={size}
				height={size}
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
		>
			<path
					d="M8.00018 3.28596V12.714M3.28613 8H12.7142"
					stroke={fill}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
			/>
		</svg>
));

export const ChevronDown = withDefaultProps(({ size, fill, ...props }) => (
		<svg
				width={size}
				height={size}
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
		>
			<path
					d="M3 5.5L8 10.5L13 5.5"
					stroke={fill}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
			/>
		</svg>
));

export const InfoCircle = withDefaultProps(({ size, fill, ...props }) => (
		<svg
				width={size}
				height={size}
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
		>
			<circle cx="10" cy="10" r="8.29492" stroke={fill} />
			<path
					d="M10 14.5116V14.5539M7.58936 7.90269C7.58936 6.54616 8.66866 5.44647 10 5.44647C11.3314 5.44647 12.4107 6.54616 12.4107 7.90269C12.4107 9.25922 11.3633 10.0304 10 10.3589C10 10.3589 10 10.6465 10 11.5508"
					stroke={fill}
					strokeWidth="1.7"
					strokeLinecap="round"
					strokeLinejoin="round"
			/>
		</svg>
));
