---
version: 1.0
submitted_by: markus-ntt-seidl
published_date: 2023-10-25
category: architecture
description: Applications are built with a software architecture that best fits the business need they are serving. Cloud providers make it easy to evaluate different CPU architectures, including energy-efficient cloud-native processors that offer good performance per watt.
tags:
 - cloud
 - compute
 - kubernetes
 - role:software-engineer
 - role:cloud-engineer
 - size:medium
---

# Evaluate and adopt energy-efficient processor architectures

## Description

Applications are built with a software architecture that best fits the business need they are serving. Cloud providers make it easy to evaluate different CPU architectures, including alternatives to traditional x86-64 processors. Cloud virtual machines come with different capabilities based on their underlying hardware processors. Using virtual machines based on processor energy efficiency impacts hardware efficiency and reduces carbon emissions.

## Solution

Evaluate and adopt processor architectures with energy efficiency and execution performance in mind:

### Evaluate Alternative CPU Architectures

Consider CPU architectures beyond x86-64, evaluating them for:
- **Energy efficiency**: Performance per watt for your specific workload
- **Execution performance**: Actual application performance on the architecture
- **Cost effectiveness**: Price-to-performance ratio
- **Workload suitability**: Whether the architecture is well-suited to your application's computational patterns

### Cloud-Native Processors (ARM-based)

Modern cloud providers offer virtual machines with [cloud-native processors](https://www.forbes.com/sites/davealtavilla/2022/10/13/amperes-efficient-128-core-cloud-native-processor-builds-momentum-in-sustainable-data-centers/) engineered specifically for efficient, scale-out cloud workloads:

**ARM-based instances** provide significant energy efficiency advantages:
- Azure: [Azure Virtual Machines with Ampere Altra ARM-based processors](https://azure.microsoft.com/en-us/blog/azure-virtual-machines-with-ampere-altra-arm-based-processors-generally-available/)
- Google Cloud: [Tau T2A (first Compute Engine VM on an ARM chip)](https://cloud.google.com/blog/products/compute/tau-t2a-is-first-compute-engine-vm-on-an-arm-chip)
- AWS: Graviton processors for ARM-based compute

These processors are designed for cloud-native workloads and typically offer:
- Better energy efficiency per core
- Cost effectiveness (lower pricing for similar or better performance)
- High core counts for parallel workloads

### Specialized Accelerators

Also consider specialized accelerators that cloud providers offer for specific workload types:
- GPUs for parallel processing and machine learning
- FPGAs for customizable hardware acceleration
- ASICs for domain-specific tasks (e.g., AI/ML inference)

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Evaluating and adopting energy-efficient processor architectures impacts SCI as follows:

- `E`: Energy-efficient processors reduce total energy consumption for the same computational work, directly lowering operational carbon emissions
- `M`: By using processors with better performance-per-watt characteristics, fewer physical resources may be required, reducing embodied carbon

## Assumptions

- The application framework can be executed on alternative CPU architectures and is optimized for them
- The cloud provider offers VM SKUs based on efficient hardware in your deployment regions

## Considerations

- Energy-efficient VMs tend to be cost-effective as well, offering both environmental and financial benefits
- Consider SKU availability in your chosen deployment region, as not all instance types are available in all regions
- Ensure your application and dependencies are compatible with alternative architectures (particularly ARM), including:
  - Runtime environments (Node.js, Python, Java, etc.)
  - Container images and base images
  - Third-party libraries and native dependencies
- Performance testing is essential to validate that the architecture meets your requirements
- Some workloads benefit significantly from ARM processors (web servers, microservices, containerized apps), while others may need x86-64 compatibility

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
- [Forbes: Ampere's Cloud Native Processor in Sustainable Data Centers](https://www.forbes.com/sites/davealtavilla/2022/10/13/amperes-efficient-128-core-cloud-native-processor-builds-momentum-in-sustainable-data-centers/)
- [Software Carbon Intensity Spec](https://grnsft.org/sci)
