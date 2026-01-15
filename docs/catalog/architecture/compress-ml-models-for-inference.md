---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: architecture
description: Large-scale AI/ML models require significant storage space and take more resources to run as compared to optimized models. Modern model optimization techniques can dramatically reduce model size and inference costs while maintaining accuracy.
tags:
 - ai
 - machine-learning
 - role:data-scientist
 - role:software-engineer
 - size:medium
---

# Optimize the size of AI/ML models

## Description

Large-scale AI/ML models require significant storage space and take more resources to run as compared to optimized models. Modern AI models, particularly large language models (LLMs), can range from billions to hundreds of billions of parameters, making deployment challenging. Model optimization techniques can reduce model size by 50-90% while maintaining acceptable accuracy, dramatically lowering storage, memory, and compute requirements.

## Solution

Apply modern model optimization strategies to reduce model size and improve inference efficiency. These techniques can be used individually or combined for maximum effect:

### 1. Quantization (Table Stakes for 2025)

Quantization reduces the numerical precision of model weights and activations, decreasing model size and speeding up inference:

**Post-Training Quantization:**
- **INT8 quantization**: Converts 32-bit floating point to 8-bit integers, reducing model size by ~75%
- **FP16 (Half-precision)**: Uses 16-bit floats, reducing size by 50% with minimal accuracy loss
- Easy to apply without retraining, supported by most frameworks

**Quantization-Aware Training (QAT):**
- Simulates quantization during training for better accuracy preservation
- Results in models that perform well when quantized
- More accurate than post-training quantization but requires retraining

**Advanced Quantization for LLMs:**
- **GPTQ**: Optimal quantization specifically designed for large language models
- **AWQ (Activation-aware Weight Quantization)**: Preserves important weights for better accuracy
- **GGUF/GGML**: Quantization formats optimized for CPU inference (used by llama.cpp)
- Can achieve 3-4 bit quantization with acceptable quality loss

### 2. Knowledge Distillation

Train a smaller "student" model to mimic a larger "teacher" model's behavior:

**Process:**
- Train large teacher model to high accuracy
- Use teacher's predictions (soft targets) to train smaller student model
- Student learns to approximate teacher's decision boundaries, not just labels

**Benefits:**
- Student models are typically 10-100x smaller than teachers
- Can preserve 95%+ of teacher model accuracy
- Enables deployment on resource-constrained devices

**Modern Examples:**
- DistilBERT (66M params) distilled from BERT (110M params), 97% accuracy retention
- Microsoft Phi-3-mini (3.8B params) achieving performance competitive with much larger models
- TinyLLaMA (1.1B params) distilled knowledge from larger LLaMA models

### 3. Pruning

Remove unnecessary weights or structures from trained models:

**Unstructured Pruning:**
- Remove individual weights with smallest magnitude
- Can achieve 80-90% sparsity with minimal accuracy loss
- Requires sparse computation kernels for speedup

**Structured Pruning:**
- Remove entire channels, filters, or attention heads
- Directly reduces model dimensions and computation
- Works with standard hardware without special kernels

**Dynamic Pruning:**
- Adaptively remove computations based on input
- Early exit mechanisms for simple inputs
- Lottery Ticket Hypothesis: find sparse subnetworks that train to similar accuracy

### 4. Architectural Efficiency

Choose or design architectures optimized for efficiency:

**Efficient Model Families:**
- **MobileNets v4**: Optimized for mobile and edge devices
- **EfficientNet**: Compound scaling for optimal size-accuracy tradeoff
- **SqueezeNet**: Achieves AlexNet-level accuracy at 50x smaller size
- **Efficient Transformers**: Linear attention mechanisms for reduced complexity

**Small but Capable LLMs (2025):**
- **Microsoft Phi-3** (3.8B, 7B, 14B): Small models with strong performance
- **Mistral 7B**: Efficient 7B parameter model outperforming larger models
- **Gemma 2B/7B** (Google): Efficient open models for diverse tasks
- **LLaMA 3 variants**: Multiple sizes optimized for different deployment scenarios

### 5. Low-Rank Factorization

Decompose weight matrices into products of smaller matrices:
- LoRA (Low-Rank Adaptation): Efficient fine-tuning with <1% parameters
- QLoRA: Combines quantization with LoRA for ultra-efficient training
- Enables fine-tuning large models on consumer GPUs

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing AI/ML model size impacts SCI as follows:

- `E`: Reduces energy consumption for inference through:
  - Lower memory bandwidth requirements
  - Fewer computational operations
  - Reduced storage I/O
  - Enables running on more energy-efficient hardware
- `M`: Reduces embodied carbon by:
  - Requiring less memory capacity
  - Enabling deployment on smaller, less powerful devices
  - Reducing data center infrastructure needs

## Assumptions

- Model optimization is applied with accuracy evaluation to ensure acceptable performance
- Target deployment environment is known (cloud, edge, mobile) to guide optimization choices
- Optimization tools and frameworks are available for the model type

## Considerations

- **Accuracy-Size Tradeoff**: Always evaluate optimized models against accuracy requirements
- **Technique Selection**: Different techniques work better for different model types:
  - LLMs: GPTQ, AWQ quantization + LoRA fine-tuning
  - Vision models: Quantization + pruning
  - Small models for edge: Knowledge distillation + MobileNet architectures
- **Hardware Compatibility**: Ensure optimization format is supported by target hardware
- **Maintenance**: Document optimization settings for reproducibility
- **Iterative Approach**: Start with simple techniques (post-training quantization) before complex methods
- **Latency vs. Throughput**: Some optimizations improve one at the expense of the other

## References

- [ONNX Runtime - Model Optimization](https://onnxruntime.ai/docs/performance/model-optimizations/)
- [TensorRT - NVIDIA GPU Inference Optimization](https://developer.nvidia.com/tensorrt)
- [vLLM - High-Throughput LLM Serving](https://github.com/vllm-project/vllm)
- [GPTQ - Accurate Quantization for LLMs](https://arxiv.org/abs/2210.17323)
- [AWQ - Activation-aware Weight Quantization](https://arxiv.org/abs/2306.00978)
- [Knowledge Distillation](https://arxiv.org/abs/1503.02531)
- [The Lottery Ticket Hypothesis](https://arxiv.org/abs/1803.03635)
- [LoRA - Low-Rank Adaptation](https://arxiv.org/abs/2106.09685)
- [Software Carbon Intensity Spec](https://grnsft.org/sci)
