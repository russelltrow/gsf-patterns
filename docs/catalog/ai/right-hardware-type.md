---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: architecture
description: Selecting the right hardware/VM instance types for AI/ML training and inference is critical for energy efficiency. The hardware landscape has evolved dramatically with specialized AI accelerators, GPUs, and custom silicon offering vastly different performance-per-watt characteristics.
tags:
 - ai
 - machine-learning
 - cloud
 - compute
 - role:data-scientist
 - role:cloud-engineer
 - role:software-engineer
 - size:large
---

# Select the right hardware/VM instance types for AI/ML training

## Description

Training an AI model has a significant carbon footprint. Selecting the right hardware/VM instance types for training and inference is one of the most impactful choices you can make as part of your energy-efficient AI/ML process. The hardware landscape has evolved dramatically since 2022, with a proliferation of specialized AI accelerators, GPU generations, and custom silicon options, each with vastly different performance-per-watt characteristics and suitability for different workloads.

## Solution

Evaluate and select hardware based on your specific workload requirements, balancing performance, energy efficiency, cost, and availability:

### Modern GPU Hardware (2025)

**NVIDIA GPUs (Market Leader):**

*Training-Optimized:*
- **H100/H200 (Hopper architecture)**: Flagship for large-scale training (70B+ parameter models)
  - 60-80 TFLOPS FP16, ~700W TDP
  - Best for: Distributed training of foundation models, massive batch sizes
  - TCO: High upfront cost, excellent performance-per-watt for large workloads

- **L40S (Ada Lovelace)**: Versatile for training and inference
  - 45 TFLOPS FP16, 350W TDP
  - Best for: Mid-size models (7B-30B), mixed training/inference workloads
  - Excellent balance of performance and power efficiency

*Inference-Optimized:*
- **L4 (Ada Lovelace)**: Efficient inference and fine-tuning
  - 30 TFLOPS FP16, 72W TDP
  - Best for: Inference serving, LoRA/QLoRA fine-tuning, edge deployment
  - Outstanding power efficiency for inference workloads

*Consumer/Development:*
- **RTX 6000 Ada**: Workstation-class for research and development
  - 48GB memory, good for prototyping 7B-13B models

**AMD GPUs (Growing Ecosystem):**
- **MI300X**: Competitive with H100 for LLM training
  - 192GB HBM3, excellent for large model training
  - Best for: Organizations diversifying from NVIDIA
  - Mature ROCm software stack for PyTorch/TensorFlow
- **MI300/MI250**: Previous generation, cost-effective for certain workloads

**Intel GPUs:**
- **Gaudi2/Gaudi3**: Purpose-built AI accelerators
  - Competitive pricing vs. NVIDIA
  - Growing software ecosystem
  - Best for: Cost-sensitive large-scale training

### Custom Silicon and Cloud TPUs

**Google Cloud TPUs:**
- **TPU v5e/v5p**: 5th generation, optimized for LLM training and inference
  - TPU v5e: Cost-optimized for training and inference
  - TPU v5p: Highest performance for cutting-edge research
  - Excellent for JAX-based training (native framework)
  - 2-3x better performance-per-watt than comparable GPUs for certain workloads

**AWS Custom Silicon:**
- **Trainium (Trn1)**: Purpose-built for training
  - Up to 40% better price-performance than GPUs for LLM training
  - Best for: Large-scale training on AWS infrastructure
  - Supported by PyTorch and NeuronSDK

- **Inferentia2 (Inf2)**: Optimized for inference
  - 10x better throughput vs. GPU inference for similar cost
  - Best for: High-volume inference serving, chatbots, embeddings

**Emerging Specialized Hardware:**
- **Cerebras WSE-3**: Wafer-scale engine for massive models
  - Entire wafer as single chip, 900,000 cores
  - Best for: Research institutions, extreme-scale models
  - Unique architecture for sparse models

- **SambaNova DataScale**: Reconfigurable dataflow architecture
  - Efficient for training and inference
  - Growing enterprise adoption

### Decision Matrix for Hardware Selection

**By Model Size:**
- **<1B parameters**: CPU or single consumer GPU (RTX 4090, L4)
- **1B-7B parameters**: Single L4, L40S, or A100
- **7B-30B parameters**: L40S, A100, H100, MI300X
- **30B-70B parameters**: H100, MI300X, multi-GPU setup, or TPU v5e
- **70B+ parameters**: H100/H200 multi-node, TPU v5p, or Trainium clusters

**By Workload Type:**

*Pre-training from scratch:*
- H100/H200 for maximum speed
- TPU v5e/v5p for cost-efficiency at scale
- Trainium for AWS-native workflows

*Fine-tuning:*
- **LoRA/QLoRA (parameter-efficient)**: L4, single A100, consumer GPUs
- **Full fine-tuning**: Same as pre-training but smaller scale
- Consider spot instances for cost savings

*Inference serving:*
- **High-throughput**: Inferentia2, L4 clusters
- **Low-latency**: L4, L40S with TensorRT or vLLM optimization
- **Edge deployment**: Quantized models on CPU or mobile accelerators

**By Cost Profile:**
- **Budget-conscious**: AMD MI-series, Intel Gaudi, Trainium
- **Performance-critical**: NVIDIA H100/H200
- **Balanced**: L40S, TPU v5e
- **Development**: Consumer GPUs (RTX series) or L4

### Energy Efficiency Metrics (2025 Benchmarks)

**TFLOPS per Watt (FP16 Training):**
- L4: ~417 TFLOPS/watt (30 TFLOPS / 72W) - Most efficient for inference
- L40S: ~129 TFLOPS/watt (45 TFLOPS / 350W)
- H100: ~86-114 TFLOPS/watt (60-80 TFLOPS / 700W)
- TPU v5e: ~100-150 TFLOPS/watt (estimated, workload-dependent)

**Total Cost of Ownership (TCO):**
Consider:
- Initial hardware or hourly cloud cost
- Power consumption ($/kWh × Watts × training hours)
- Cooling requirements (typically 1.5x power consumption)
- Embodied carbon of manufacturing
- Utilization rates and idle power

### Modern Workload Examples and Patterns

**Training Scenarios:**
- **7B model training**: 8x L40S or 4x H100, ~2-4 weeks on typical datasets
- **70B model training**: 64-128x H100 or TPU v5p pod, weeks to months
- **LoRA fine-tuning of 7B model**: Single L4 or A100, hours to days

**Distributed Training Orchestration:**
- DeepSpeed: Multi-node training with ZeRO optimizer
- FSDP (PyTorch): Fully Sharded Data Parallel for large models
- Megatron-LM: NVIDIA's framework for massive models
- Enable training models larger than single-GPU memory

**Inference Optimization:**
- vLLM: High-throughput inference with PagedAttention
- TensorRT-LLM: NVIDIA's optimized inference engine
- Text Generation Inference (TGI): HuggingFace's production server
- Batch multiple requests to maximize GPU utilization (10-100x better throughput)

**Cost Optimization Strategies:**
- **Spot/preemptible instances**: 60-90% savings for interruptible training
- **Reserved instances**: 30-50% savings for predictable workloads
- **Mixed precision training**: FP16/BF16 for 2x speedup with minimal accuracy loss
- **Gradient accumulation**: Simulate large batches on smaller GPUs
- **Checkpointing**: Resume training after interruptions (essential for spot instances)

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Selecting the right hardware/VM types impacts SCI as follows:

- `E`: Energy-efficient hardware reduces electricity consumption through:
  - Higher TFLOPS-per-watt for actual workload
  - Lower idle power consumption
  - Better memory bandwidth efficiency
  - Optimized tensor operations for AI workloads

- `M`: Reduces embodied carbon by:
  - Requiring fewer total accelerators for same workload
  - Shorter training times reducing resource utilization
  - Efficient inference enables running on smaller infrastructure

## Assumptions

- Cloud provider offers appropriate hardware in your target regions
- Software frameworks support the selected hardware (drivers, SDKs)
- Workload can be optimized for the hardware architecture
- Budget allows for energy-efficient hardware (which often has higher upfront cost)

## Considerations

### Hardware Selection Criteria:

**Performance:**
- Peak TFLOPS less important than sustained performance for your specific model architecture
- Memory capacity and bandwidth critical for large models
- Interconnect speed matters for multi-GPU training

**Software Ecosystem:**
- **NVIDIA**: Most mature software stack (CUDA, cuDNN, TensorRT)
- **AMD**: Growing PyTorch support via ROCm
- **TPU**: Best with JAX, good with PyTorch/XLA
- **AWS Trainium**: Requires NeuronSDK, growing PyTorch support

**Availability and Cost:**
- GPU availability has improved since 2022-2023 shortage
- Cloud region selection affects both availability and carbon intensity
- Consider carbon-aware scheduling (train in low-carbon regions/times)

**Future-Proofing:**
- Rapid hardware evolution means 2-3 year refresh cycles
- Design training pipelines to be hardware-agnostic when possible
- Use frameworks that abstract hardware (PyTorch, JAX, TensorFlow)

### Red Flags to Avoid:

- Over-provisioning: Using H100 for workloads that run fine on L4
- Under-provisioning: Insufficient memory causing excessive swapping
- Ignoring power efficiency for long-running training jobs
- Not considering spot instances for fault-tolerant workloads
- Using outdated hardware (V100, P100) when efficient alternatives exist

## References

- [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/pdf/1906.02243.pdf)
- [NVIDIA H100 Tensor Core GPU Architecture](https://resources.nvidia.com/en-us-tensor-core)
- [AMD MI300X Architecture](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html)
- [Google TPU v5e Documentation](https://cloud.google.com/tpu/docs/v5e)
- [AWS Trainium](https://aws.amazon.com/machine-learning/trainium/)
- [AWS Inferentia2](https://aws.amazon.com/machine-learning/inferentia/)
- [vLLM - Fast LLM Inference](https://github.com/vllm-project/vllm)
- [DeepSpeed for Distributed Training](https://www.deepspeed.ai/)
- [Software Carbon Intensity Spec](https://grnsft.org/sci)
