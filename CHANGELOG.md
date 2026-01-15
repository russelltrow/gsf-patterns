# Changelog

All notable changes to the Green Software Patterns catalog will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased] - 2026-01-15

### Major Reorganization: Technology-based to Lifecycle-based Categories

The patterns catalog has been restructured from technology-based categories (Web, Cloud, AI) to software development lifecycle-based categories (Requirements, Architecture, Development, Operations). This change makes it easier for practitioners to find patterns relevant to their current phase of work.

### Added

#### New Category Structure
- **Requirements** category (4 patterns) - Patterns for requirements gathering and definition phase
- **Architecture** category (14 patterns) - Patterns for architectural decisions impacting carbon footprint
- **Development** category (21 patterns) - Patterns for coding practices and implementation techniques
- **Operations** category (11 patterns) - Patterns for running and maintaining systems in production

#### New Merged Patterns
- `optimize-storage-utilization.md` - Consolidated pattern covering storage resource identification, deletion, consolidation, and automated retention policies
- `right-size-compute-resources.md` - Unified pattern for VM/compute resource sizing covering both dynamic adjustment and SKU selection
- `minimize-transmitted-data.md` - Comprehensive pattern covering both data reduction and compression techniques
- `optimize-cpu-utilization.md` - Combined pattern addressing both average utilization and peak spike reduction
- `evaluate-energy-efficient-processors.md` - Merged pattern covering CPU architecture evaluation and cloud-native processor adoption
- `scale-down-applications-when-not-in-use.md` - General pattern with Kubernetes-specific implementation details
- `dynamic-scaling-based-on-demand.md` - Unified pattern covering time-based and metrics-driven scaling approaches
- `optimize-image-delivery.md` - Comprehensive pattern covering modern static image formats and animated content optimization

### Changed

#### Pattern Content Updates (2025 Modernization)

**AI/ML Model Optimization** (`compress-ml-models-for-inference.md`)
- Expanded quantization coverage: INT8/FP16, post-training vs. quantization-aware training
- Added advanced LLM quantization: GPTQ, AWQ, GGUF/GGML formats
- Added knowledge distillation section with modern examples (Phi-3, DistilBERT, TinyLLaMA)
- Added pruning techniques: unstructured, structured, dynamic pruning
- Added architectural efficiency guidance: MobileNets v4, EfficientNet, efficient transformers
- Added low-rank factorization: LoRA, QLoRA for efficient fine-tuning
- Updated references: ONNX Runtime, TensorRT, vLLM, modern research papers

**AI/ML File Formats** (`efficent-format-for-model-training.md`)
- Expanded to cover both training data and model artifact formats
- Added training data formats: HuggingFace Datasets (Arrow), Zarr, WebDataset
- Added model artifact formats: SafeTensors (2025 standard), ONNX, MLX for Apple Silicon
- Added modern checkpointing: DeepSpeed, FSDP, TensorFlow SavedModel
- Added model versioning and metadata tracking guidance
- Added compression strategies: gzip, zstd, Snappy
- Removed outdated model references (GPT-Neo 125M, DistilBERT)
- Added 2025 performance benchmarks

**AI/ML Hardware Selection** (`right-hardware-type.md`)
- Complete rewrite reflecting 2025 hardware landscape
- Added comprehensive GPU coverage: NVIDIA H100/H200/L40S/L4, AMD MI300X, Intel Gaudi2/Gaudi3
- Added custom silicon: Google TPU v5e/v5p, AWS Trainium/Inferentia2, Cerebras WSE-3
- Added decision matrices: by model size, workload type, cost profile
- Added energy efficiency metrics: TFLOPS per watt for 2025 hardware
- Added modern workload examples: 7B-70B parameter model training scenarios
- Added distributed training orchestration: DeepSpeed, FSDP, Megatron-LM
- Added inference optimization: vLLM, TensorRT-LLM, Text Generation Inference
- Added cost optimization strategies: spot instances, mixed precision training

**Image Delivery Optimization** (`optimize-image-delivery.md`)
- Updated with 2025 browser support data (WebP 98%+, AVIF 75%+)
- Added JPEG XL and HEIF/HEIC format coverage
- Added responsive image delivery implementation examples
- Added format selection decision tree
- Enhanced animated content guidance (MP4, WebM, animated AVIF/WebP)
- Added CSS and SVG animation alternatives
- Added implementation best practices with code examples

#### Metadata and Documentation Updates
- Changed primary categorization from technology type to lifecycle phase
- Updated all pattern frontmatter: `category` field changed from `web|cloud|ai` to `requirements|architecture|development|operations`
- Updated documentation (`docs/guide/index.md`) to reflect new category structure
- Technology types (Web, Cloud, AI) retained as tags for cross-cutting concerns

#### Pattern Reassignments by New Category

**Requirements (4 patterns):**
- Encrypt what is necessary
- Match your service level objectives to business needs
- Optimize impact on customer devices and equipment
- Shed lower priority traffic

**Architecture (14 patterns):**
- AI/ML: Model optimization, file formats, hardware selection, edge deployment, framework selection, efficient models
- Infrastructure: Containerization, stateless design, request queuing, region selection, network optimization, serverless, component scaling, processor architecture

**Development (21 patterns):**
- Web: Server-side rendering, CSS optimization, data tracking, asset minification, request optimization, DOM management, image optimization, compression
- AI/ML: Sustainable regions, transfer learning
- Backend: TLS termination, async calls, compiled languages, environment minimization, caching, data compression, transmission optimization

**Operations (11 patterns):**
- Resource Management: Compute right-sizing, CPU optimization, storage optimization
- Scaling: Application scaling, dynamic demand-based scaling
- Reliability: Circuit breakers, cron job time-shifting
- Security: Vulnerability scanning, network security, DDoS protection

### Removed

#### Deleted Patterns (2 patterns)
- `serverless-model-development.md` - Redundant with general serverless pattern, too AI/ML-specific
- `evaluate-using-a-service-mesh.md` - Too narrow/tactical, single decision point rather than reusable pattern

#### Merged Patterns (19 patterns → 8)
The following patterns were consolidated into more comprehensive patterns:

**Storage Optimization (3 → 1):**
- `delete-unused-storage-resources.md` → `optimize-storage-utilization.md`
- `remove-unused-assets.md` → `optimize-storage-utilization.md`
- `set-retention-policy-on-storage-resources.md` → `optimize-storage-utilization.md`

**VM Utilization (2 → 1):**
- `match-utilization-requirements-of-vm.md` → `right-size-compute-resources.md`
- `match-utilization-requirements-with-pre-configured-server.md` → `right-size-compute-resources.md`

**Data Transmission (2 → 1):**
- `reduce-transmitted-data.md` → `minimize-transmitted-data.md`
- `compress-transmitted-data.md` → `minimize-transmitted-data.md`

**CPU Utilization (2 → 1):**
- `optimize-avg-cpu-utilization.md` → `optimize-cpu-utilization.md`
- `optimize-peak-cpu-utilization.md` → `optimize-cpu-utilization.md`

**CPU Architecture (2 → 1):**
- `evaluate-other-cpu-architectures.md` → `evaluate-energy-efficient-processors.md`
- `use-energy-efficient-hardware.md` → `evaluate-energy-efficient-processors.md`

**Application Scaling (2 → 1):**
- `scale-down-kubernetes-workloads.md` → `scale-down-applications-when-not-in-use.md`
- `scale-down-unused-applications.md` → `scale-down-applications-when-not-in-use.md`

**Infrastructure Scaling (2 → 1):**
- `scale-infrastructure-with-user-load.md` → `dynamic-scaling-based-on-demand.md`
- `scale-kubernetes-workloads-based-on-events.md` → `dynamic-scaling-based-on-demand.md`

**Image Formats (2 → 1):**
- `serve-images-in-modern-formats.md` → `optimize-image-delivery.md`
- `deprecate-gifs.md` → `optimize-image-delivery.md`

#### Removed Category Structure
- Deleted `docs/catalog/web/` directory and landing page
- Deleted `docs/catalog/cloud/` directory and landing page
- Deleted `docs/catalog/ai/` directory and landing page

### Summary Statistics

**Before Reorganization:**
- 61 total patterns
- 3 categories (Web: 13, Cloud: 39, AI: 9)
- Some content duplication and overlap
- Patterns organized by technology domain

**After Reorganization:**
- 50 total patterns (-11 patterns through merging and deletion)
- 4 categories (Requirements: 4, Architecture: 14, Development: 21, Operations: 11)
- Reduced redundancy through strategic merging
- Patterns organized by software development lifecycle phase
- 4 patterns updated with 2025 state-of-the-art content
- All patterns properly categorized and metadata updated

### Migration Notes

**For Contributors:**
- New patterns should be categorized by lifecycle phase: Requirements, Architecture, Development, or Operations
- Technology types (web, cloud, ai) are now tags, not primary categories
- Review the updated pattern template and submission guidelines in `docs/guide/index.md`

**For Users:**
- Old technology-based categories have been replaced with lifecycle-based categories
- Use tags to filter by technology type (web, cloud, ai, kubernetes, etc.)
- Pattern URLs have changed - bookmarks may need updating
- Sidebar navigation now reflects the software development lifecycle

### Technical Details

**Build Status:** ✅ Site builds successfully with new structure
**Docusaurus Version:** 2.0.1 (compatible, upgrade to 3.9.2 recommended)
**Pattern Count Verified:** All 50 patterns properly categorized and accessible
**Sidebar Generation:** Automatic sidebar generation working correctly with new structure

---

## Historical Changes

Previous versions of this patterns catalog used technology-based categorization (Web, Cloud, Artificial Intelligence). This reorganization represents a major structural change to improve discoverability and align with software development workflows.

For questions about this reorganization, please open an issue in the GitHub repository.
