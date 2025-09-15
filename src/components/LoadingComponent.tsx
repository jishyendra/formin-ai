import React from "react";
import { Wand2, Sparkles, Brain, Zap } from "lucide-react";

const LoadingComponent = ({ message = "Generating your form..." }) => {
	return (
		<div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse'></div>
				<div className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000'></div>
			</div>
			<div className='relative z-10 max-w-2xl mx-auto px-6 text-center'>
				<div className='mb-8 relative'>
					<div className='inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl animate-bounce'>
						<Brain className='w-12 h-12 text-white animate-pulse' />
					</div>
					<div className='absolute inset-0 w-24 h-24 animate-spin-slow'>
						<div className='absolute -top-2 left-1/2 transform -translate-x-1/2'>
							<div className='w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center'>
								<Sparkles className='w-4 h-4 text-yellow-500' />
							</div>
						</div>
						<div className='absolute top-1/2 -right-2 transform -translate-y-1/2'>
							<div className='w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center'>
								<Wand2 className='w-4 h-4 text-purple-500' />
							</div>
						</div>
						<div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2'>
							<div className='w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center'>
								<Zap className='w-4 h-4 text-blue-500' />
							</div>
						</div>
					</div>
				</div>

				<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
					<span className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
						AI is Working
					</span>
				</h2>

				<p className='text-xl text-gray-600 mb-8'>{message}</p>

				<div className='w-full max-w-md mx-auto mb-8'>
					<div className='bg-gray-200 rounded-full h-2 overflow-hidden'>
						<div className='bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full animate-progress'></div>
					</div>
				</div>
				<div className='space-y-4 max-w-lg mx-auto'>
					<div className='flex items-center justify-center space-x-3 text-gray-600'>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
						<span className='text-sm'>Analyzing your requirements</span>
					</div>
					<div className='flex items-center justify-center space-x-3 text-gray-600'>
						<div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-500'></div>
						<span className='text-sm'>Designing form structure</span>
					</div>
					<div className='flex items-center justify-center space-x-3 text-gray-600'>
						<div className='w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000'></div>
						<span className='text-sm'>Generating form fields</span>
					</div>
					<div className='flex items-center justify-center space-x-3 text-gray-500'>
						<div className='w-2 h-2 bg-gray-300 rounded-full animate-pulse animation-delay-1500'></div>
						<span className='text-sm'>Finalizing your form</span>
					</div>
				</div>

				<div className='flex justify-center items-center space-x-2 mt-8'>
					<div className='w-3 h-3 bg-indigo-500 rounded-full animate-bounce'></div>
					<div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-200'></div>
					<div className='w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-400'></div>
				</div>
			</div>

			<style jsx>{`
				@keyframes spin-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes progress {
					0% {
						width: 0%;
					}
					50% {
						width: 60%;
					}
					100% {
						width: 85%;
					}
				}

				.animate-spin-slow {
					animation: spin-slow 8s linear infinite;
				}

				.animate-progress {
					animation: progress 3s ease-in-out infinite;
				}

				.animation-delay-200 {
					animation-delay: 0.2s;
				}

				.animation-delay-400 {
					animation-delay: 0.4s;
				}

				.animation-delay-500 {
					animation-delay: 0.5s;
				}

				.animation-delay-1000 {
					animation-delay: 1s;
				}

				.animation-delay-1500 {
					animation-delay: 1.5s;
				}

				.animation-delay-2000 {
					animation-delay: 2s;
				}
			`}</style>
		</div>
	);
};

export default LoadingComponent;
