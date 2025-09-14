# Ch1 Signals and Systems
## Continuous-Time and Discrete-Time Signals
### Multi-Dimesional Signals
Signals having two or more independent variables.
$f(x,y,z)$ or $f[m,n,l]$
### Signal Power and Energy
From the power consumption of a resistor:
$p(t)\propto v^2(t) \propto i^2(t)$
![[Pasted image 20250912103615.png]]
## Transformations of Independent Variable
### Time Shift
$x(t)\rightarrow x(t-t_0)$
$x[n]\rightarrow x[n-n_0]$
### Time Reversal
$x(t)\rightarrow x(-t)$
$x[n]\rightarrow x[-n]$
### Time Scaling
$a<0$:Time Scaling($|a|$)+Time Reversal
For $x[n]$,the $x[an]$ has the real meaning assuming that $an$ is an integer.
### Periodic Signals
- ==Fundamental Period==:the smallest positive period
Q1：Is there any periodic signal without fundamental period?
Constant signal.
Q2：Is $sin(at)+sin(bt)$ periodic or not ? Or more generally, if both $f(t)$ and $g(t)$ are periodic, then is $f(t) + g(t)$ periodic?
If and only if there exists a rational number $p$,such that $a=pb$.
$f(t)+g(t) \text{ 是周期信号 } \iff \frac{T_f}{T_g} \in \mathbb{Q} \ (\text{有理数})$
Q3：If T is the fundamental period of both $f(t)$ and $g(t)$, determine the possible values of the fundamental period of $f(t) + g(t)$.
The fundamental period of $h(t)$ is either $T$ or a proper factor of $T$.($\frac{T}{k}$ where $k$ is a positive integer)
Trivial periodic signals are considered separately.
Q4：If the fundamental period of $f(t)$ and $g(t)$ are $T$ and $2T$ respectively, determine the possible values of the fundamental period of $f(t) + g(t)$.
The fundamental period of $h(t)$ can only be $2T$.
Any periodic function can be regarded as a superposition of a series of sine waves(or cosine waves)of different frequencies.This problem can be better understood from the perspective of frequency superposition and cancellation.
### Even and Odd Signals
Signal decomposition: $x(t)=\frac{x(t)+x(-t)}{2}+\frac{x(t)-x(-t)}{2}$
The signal can be devided into odd signals and even signals.
## Typical Signals
### Complex Exponential and Sinusoidal Signals
- complex exponential signal: $x(t) = C e^{(\alpha + j\omega_0)t} = |C| e^{\alpha t} \left[ \cos(\omega_0 t + \varphi) + j \sin(\omega_0 t + \varphi) \right]$
- sinusoidal signal: $x(t)=A\cos(\omega_0 t+\varphi)$
Q：Is $x[n]=Acos(\omega_0 n)$ periodic? If it is, determine its fundamental period.
A：Only when $|\omega_0|=\frac{2\pi m}{N}, m, N\in \mathbf{Z}$ and $N>0$. If $m\ne 0$, fundamental period is $\frac{N}{gcd(m,N)}$.This is to ensure a simplest integer ratio.
### CT Unit Step Function
$U(0)$ is undefined.
It can be used to construct a square a wave or truncate a signal.
### CT Unit Impulse Function
- Defintion1: $\delta(t) = \lim_{\tau \to 0} \frac{1}{\tau} \left[ u\left(t + \frac{\tau}{2}\right) - u\left(t - \frac{\tau}{2}\right) \right]$
It can be defined using other pulses,such as triangular pulse,Gaussian pulse...
- Definition2(Dirac function): $$\begin{cases}
   \int_{-\infty}^{+\infty} \delta(t) dt = 1, \\
   \delta(t) = 0, \quad \text{when } t \neq 0.
\end{cases}$$
- Definition3: one of generalized functions.$$\delta(t)=\lim_{n\rightarrow +\infty}\sqrt{\frac{n}{\pi}}e^{-n t^2}$$
Definition of Generalized functions:
$f(x)=\lim_{n\rightarrow +\infty}f(x)$ means that for any 'good' function $G(x)$,$$\int_{-\infty}^{+\infty}f(x)G(x)dx = \lim_{n\rightarrow +\infty}\int_{-\infty}^{+\infty}f_n(x)G(x)dx$$
#### Properties of $\delta(t)$
1. Even function
2. ==Sampling==:
If $f(x)$ is continuous at $x=0$ and is bounded everywhere,then
$$\begin{align*}
& \int_{-\infty}^{+\infty} \delta(\tau)f(\tau)d\tau = \int_{-\infty}^{+\infty} \delta(\tau)f(0)d\tau = f(0)\int_{-\infty}^{+\infty} \delta(\tau)d\tau = f(0) \\[2ex]
& \text{Similarly,} \quad \int_{-\infty}^{+\infty} \delta(\tau - t_0)f(\tau)d\tau = f(t_0)
\end{align*}$$
3. Relation between $\delta(t)$ and $u(t)$
	- $u(t)=\int_{-\infty}^t\delta(\tau)d\tau$
	- $\delta(t)=\frac{d}{dt}u(t)$
Time scaling of $\delta(t)$:
For nonzero a ,$\delta(at)=\frac{1}{|a|}\delta(t)$
### Decomposition of CT Signals
利用矩形的方式进行逼近。
#### Approximate $f(t)$ by pulses
$$\begin{align*}
f(t) &= \lim_{\Delta \to 0} \sum_{k=-\infty}^{+\infty} \left[ u(t - k\Delta) - u(t - k\Delta - \Delta) \right] f(k\Delta) \\[2ex]
&= \lim_{\Delta \to 0} \sum_{k=-\infty}^{+\infty} \left[ \frac{u(t - k\Delta) - u(t - k\Delta - \Delta)}{\Delta} \right] f(k\Delta)\Delta \\[2ex]
&= \int_{-\infty}^{+\infty} f(\tau)\delta(t - \tau)d\tau
\end{align*}$$
#### Approximate $f(t)$ by steps
$$\begin{align*}
f(t) &= f(-\infty) + \lim_{\Delta \to 0} \sum_{k=-\infty}^{+\infty} \left[ f(k\Delta + \Delta) - f(k\Delta) \right] u(t - k\Delta - \Delta) \\[2ex]
&= f(-\infty) + \lim_{\Delta \to 0} \sum_{k=-\infty}^{+\infty} \left[ \frac{f(k\Delta + \Delta) - f(k\Delta)}{\Delta} \right] u(t - k\Delta - \Delta)\Delta \\[2ex]
&= f(-\infty) + \int_{-\infty}^{+\infty} \frac{df(\tau)}{d\tau} u(t - \tau)d\tau
\end{align*}$$
## Continuous-Time and Discrete-Time Systems
### CT system example
1. R-L circuit
2. modulation
### DT system example
$y[n]=1.0025y[n-1]+x[n]$
### Multi-Dimensional System Examples
1. Linear circuit
2. MIMO communication
## Basic System Properties
### Systems With or Without Memory
A system i memoryless if and only if its output at any given time depends only on the input at the same time.
#### Common systems with memory
- $v(t)=\frac{1}{C}\int_{-\infty}^{t}i(\tau)d\tau$
- $y(t) = x(t+t_0), \quad t_0 \neq 0$
- $y[n] = \begin{cases} x[n/2], & n \text{ is even} \\ 0, & n \text{ is odd} \end{cases}$
### Linearity
Definition1: linearity = additivity + homogeneity(均匀性)
Definition2: For any $x1 (t)$ , $x2 (t)$and constant a, b, if $x1 (t)→ y1 (t)$ and $x2 (t)→ y2 (t)$, then $ax1 (t) + bx2 (t)→ ay1 (t) + by2 (t)$.
Nice example: $y(t)=\int x(t)dt$
Q1：System S: $y(t)=2y(1)+x(t)$, is S a linear system?
A:$$
y(1)=2y(1)+x(1) \Rightarrow y(1)=-x(1) \Rightarrow y(t)=x(t)-2x(1)
$$
$$
\begin{align*} \alpha x_1(t) + \beta x_2(t) &\rightarrow [\alpha x_1(t) + \beta x_2(t)] - 2[\alpha x_1(1) + \beta x_2(1)] \\ &= \alpha[x_1(t) - 2x_1(1)] + \beta[x_2(t) - 2x_2(1)] \\ &= \alpha y_1(t) + \beta y_2(t) \end{align*}
$$
### Time Invariance
A system is time-invariant means that if the input of that system is time shifted by any $t0$ (or $n0$ for DT systems) , then the output is also==time shifted== by the same $t0$ (or $n0$ ).
Pay attention to the independence between time shift and time scaling.
### (BIBO)Stability
A system is stable means that if the input of that system is bounded, then the output is also bounded.
Nice examples:
1. $y[n]=\sum_{k=-\infty}^n x[k]$,unstable
2. $y(t)+\frac{dy(t)}{dt}=x(t)$,stable
3. $y(t)-\frac{dy(t)}{dt}=x(t)$,unstable
### Causality
A system is causal if the output at any time depends only on the values of input at the present time and in the past.
Nice examples:
1. $y(t)=x(t)sin(t+1)$,math functions' time shift is independent of future signal input.
2. $y(t)=\frac{dx(t)}{dt}$,this is slightly different from the rigorous definitionof derivative in mathematics.
### Invertibility
A system is invertible if distinct inputs lead to distinct outputs.The variable that should be mapped here is the input signal itself,not time or other physical quantities.Bijections can be used to check whether input and output can be derived equivalently.
# Ch2 Linear Time-Invariant Systems
## LTI Systems Described by Differential Equations
LTI =Linear+ Time-Invariant
### CT-LTI System Modeling
### LTI Property of Linear Constant-Coefficient Differential Equations
### Block Diagram of CT LTI Systems
The classic part is the replacement of $w(t)$.
![[Pasted image 20250913115629.png]]
![[Pasted image 20250913115712.png]]
![[Pasted image 20250913115731.png]]
### Solution of Linear Constant-Coefficient Differential Equations
Differential property of LTI system:
$$
x(t) \rightarrow y(t) \Rightarrow \frac{dx(t)}{dt} \rightarrow \frac{dy(t)}{dt}
$$
Nice example:
If $x(t)=a$,$y(0_{-})=y_0$,then
$y(t)=[a+(y_0-a)e^{-\frac{t}{RC}}]u(t)$
$y_{zs}(t)=a(1-e^{-\frac{t}{RC}})u(t)$
$y_{zi}(t)=y_0e^{-\frac{t}{RC}}u(t)$
#### Zero state response:only relates to input
- It is excited by the initial state.
#### Zero input response:only relates to initial state $y(0_{-})$
- It is excited by the input signal.
- When we talk about the response of a LTI system,we mean the zero state response,not the complete response or the zero input response.
The system is linear when considering $y_{zs}(t)$ and $y_{zi}(t)$ separately.
## Convolution Integral
### Unit Impulse Response and Unit Step Response of CT LTI Systems
#### Unit impulse response
If $x(t)=\delta(t)$, then the zero state response $y(t)=h(t)$ is called the unit impulse response.
$$x(t)→y(t)=\int_{-\infty}^{+\infty}x(\tau)h(t-\tau)d\tau$$
The output signal (zero state response) of a CT LTI system is the convolution integral of the input signal and the unit impulse response.
A CT LTI system can be represented in terms of unit impulse response.
#### Unit step response
If $x(t)=u(t)$, then the zero state response $y(t)=s(t)$ is called the unit step response.
