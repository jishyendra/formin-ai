import React from "react";
import { Wand2, FormInput, Brain, Star } from "lucide-react";

const HeroSection = () => {
	return (
		<div className='relative py-8 mb-4 flex items-center justify-center overflow-hidden'>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
				<div className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000'></div>
				<div className='absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000'></div>
			</div>
			<div className='hidden md:absolute inset-0 pointer-events-none'>
				<div className='absolute top-1/4 left-1/4 animate-float'>
					<div className='bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg'>
						<FormInput className='w-6 h-6 text-indigo-600' />
					</div>
				</div>
				<div className='absolute top-1/3 right-1/4 animate-float-delayed'>
					<div className='bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg'>
						<Brain className='w-6 h-6 text-purple-600' />
					</div>
				</div>
				<div className='absolute bottom-1/3 left-1/3 animate-float'>
					<div className='bg-gray/80 backdrop-blur-sm rounded-xl p-3 shadow-lg'>
						<Star className='w-6 h-6 text-pink-600' />
					</div>
				</div>
			</div>
			<div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
				<div className=' relative'>
					<div className='inline-flex items-center justify-center w-12 aspect-square bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl'>
						<Wand2 className='w-8 aspect-square text-white' />
					</div>
					<div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse'></div>
				</div>

				<h1 className='text-3xl md:text-7xl font-bold text-gray-700 mb-5 leading-tight'>
					<span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
						AI-Powered
					</span>
					<br />
					Form Generator
				</h1>

				<p className='text-xl md:text-2xl text-gray-400 mb-3 max-w-3xl mx-auto leading-relaxed'>
					Transform your ideas into beautiful, functional forms in seconds. Just
					describe what you need, and watch the magic happen.
					<span>
						Store the responses in{" "}
						<span className='underline underline-offset-2'>Google Sheets</span>
					</span>
				</p>
				<div className=''>
					<p className='text-md'>
						💡 Try: "Create a contact form with name, email, and message fields"
					</p>
				</div>
			</div>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-20px) rotate(3deg);
					}
				}

				@keyframes float-delayed {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-15px) rotate(-3deg);
					}
				}

				.animate-float {
					animation: float 6s ease-in-out infinite;
				}

				.animate-float-delayed {
					animation: float-delayed 6s ease-in-out infinite;
					animation-delay: 2s;
				}

				.animation-delay-2000 {
					animation-delay: 2s;
				}

				.animation-delay-4000 {
					animation-delay: 4s;
				}
			`}</style>
		</div>
	);
};

export default HeroSection;
