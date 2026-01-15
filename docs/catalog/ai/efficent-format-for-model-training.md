---
version: 1.0
submitted_by: navveenb
published_date: 2022-11-10
category: architecture
description: Efficient storage formats for both training data and model artifacts are essential to reduce storage costs, network bandwidth, and computational overhead in AI/ML development pipelines.
tags:
 - ai
 - machine-learning
 - storage
 - role:data-scientist
 - role:software-engineer
 - size:medium
---

# Use efficient file formats for AI/ML development

## Description

Data processing and storage constitute a significant portion of AI/ML development and impact the carbon footprint of your application. Variety and volumes of data might need to be captured and pre-processed for building ML models. Efficient storage of both training data and model artifacts becomes extremely important to reduce storage space, network transfer costs, and memory consumption during ML development.

## Solution

Use efficient file formats optimized for AI/ML workloads across both training data and model storage:

### Training Data Formats

**Parquet (Columnar Storage):**
- Industry standard for structured/tabular data
- Efficient compression and column-oriented storage
- 5-10x smaller than CSV with faster read performance
- Excellent for feature engineering and batch processing
- Supported by all major data processing frameworks (Spark, Pandas, Dask)

**HuggingFace Datasets (Arrow Format):**
- Now the de facto standard for ML dataset storage (2025)
- Memory-mapped for efficient random access
- Zero-copy reads reduce memory overhead
- Built-in streaming support for large datasets
- Integrated with popular ML frameworks
- Examples: Most open-source LLM training datasets (RedPajama, The Pile, etc.)

**Zarr (Multi-dimensional Arrays):**
- Optimized for large multi-dimensional numerical arrays
- Chunked storage enables parallel I/O
- Excellent for scientific computing and large-scale vision datasets
- Cloud-native with support for object storage backends
- Ideal for medical imaging, satellite imagery, and climate data

**WebDataset:**
- TAR-based format optimized for streaming during training
- Efficient for large-scale distributed training
- Minimal overhead for sequential access patterns
- Used by many large-scale vision models (LAION datasets)

### Model Artifact Formats

**SafeTensors (2025 Standard):**
- Now the default format for HuggingFace model distribution
- Safe deserialization (no arbitrary code execution risks)
- Fast loading with memory mapping
- Single file format simplifying model distribution
- Examples: LLaMA 2, LLaMA 3, Mistral 7B, Phi-3 all distributed in SafeTensors
- 2-3x faster loading than legacy pickle formats

**ONNX (Open Neural Network Exchange):**
- Cross-framework model interoperability format
- Enables deployment optimization (TensorRT, OpenVINO)
- Hardware-agnostic model representation
- Supports quantization and graph optimization
- Ideal for production deployment pipelines

**MLX Format (Apple Silicon):**
- Optimized for Apple M-series chips
- Efficient use of unified memory architecture
- Growing ecosystem for on-device AI

**Modern Checkpointing:**
- **DeepSpeed checkpoints**: Efficient for distributed training of large models
- **FSDP (Fully Sharded Data Parallel)**: PyTorch's distributed checkpointing
- **TensorFlow SavedModel**: Comprehensive format including graph and weights

### Model Versioning and Metadata

**Model Registry Patterns:**
- Track model lineage, parameters, and training configurations
- Store metadata alongside model artifacts
- Version control for models (MLflow, DVC, Weights & Biases)
- Delta/diff storage for model versions to save space

**Metadata Tracking:**
- Parameter counts and architecture specifications
- Training dataset provenance
- Performance metrics and benchmarks
- Quantization and optimization settings

### Compression Strategies

Apply compression to further reduce storage and transfer costs:

**For training data:**
- **gzip**: Widely supported, moderate compression (2-3x)
- **zstd** (Zstandard): Better compression ratio and speed than gzip (3-5x)
- **Snappy**: Fast compression for streaming scenarios

**For model artifacts:**
- Quantization (see "Optimize the size of AI/ML models" pattern)
- Sparse tensor formats for pruned models
- Compression-aware storage formats

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Using efficient file formats for ML development impacts SCI as follows:

- `E`: Reduces energy consumption through:
  - More efficient data storage and retrieval (less disk I/O)
  - Reduced network bandwidth for model distribution
  - Lower memory usage during training and inference
  - Faster loading times reducing idle GPU cycles
- `M`: Reduces embodied carbon by:
  - Requiring less storage infrastructure
  - Enabling training on smaller memory systems
  - Reducing data center storage capacity needs

## Assumptions

- Storage format compatibility with your ML framework and infrastructure
- Training pipeline can leverage memory-mapped or streaming data access
- Model distribution systems support modern formats (SafeTensors, ONNX)

## Considerations

- **Format Selection Criteria:**
  - **Training data**: Choose based on access pattern (random vs. sequential) and data structure
  - **Model artifacts**: Prioritize SafeTensors for safety and performance, ONNX for deployment flexibility
- **Migration Path**: Convert existing datasets and models incrementally
- **Backward Compatibility**: Maintain legacy format support during transition periods
- **Storage Backend**: Some formats (Zarr, Parquet) work especially well with cloud object storage
- **Compression Tradeoff**: Balance compression ratio vs. decompression speed based on use case
- **Streaming Requirements**: Use WebDataset or HuggingFace Datasets streaming for data too large for local storage

### Performance Benchmarks (2025 Typical Workloads)

**Training Data:**
- Parquet: 5-10x smaller than CSV, 3-5x faster loading
- HuggingFace Datasets: 2-3x faster than loading from disk with zero-copy reads
- WebDataset: Near-zero overhead for streaming large-scale datasets

**Model Artifacts:**
- SafeTensors: 2-3x faster loading than pickle-based formats
- ONNX with optimization: 10-50% inference speedup vs. native frameworks
- Quantized formats: 50-75% size reduction with <5% accuracy loss

## References

- [Apache Parquet](https://parquet.apache.org/)
- [HuggingFace Datasets Library](https://huggingface.co/docs/datasets/)
- [SafeTensors Format](https://huggingface.co/docs/safetensors/)
- [ONNX - Open Neural Network Exchange](https://onnx.ai/)
- [Zarr - Chunked N-dimensional Arrays](https://zarr.dev/)
- [WebDataset](https://github.com/webdataset/webdataset)
- [MLX - Apple Machine Learning Framework](https://github.com/ml-explore/mlx)
- [DeepSpeed Checkpointing](https://www.deepspeed.ai/tutorials/checkpoint/)
- [Software Carbon Intensity Spec](https://grnsft.org/sci)
