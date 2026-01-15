---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: operations
description: It's better to have one VM running at a higher utilization than two running at low utilization rates, not only in terms of energy proportionality but also in terms of embodied carbon. Two servers running at low utilization rates will consume more energy than one running at a high utilization rate. In addition, the unused capacity on the underutilized server could be more efficiently used for another task or process.
tags:
 - compute
 - cloud
 - role:cloud-engineer
 - size:small
---

# Right-size compute resources

## Description

It's better to have one VM running at a higher utilization than two running at low utilization rates, not only in terms of energy proportionality but also in terms of embodied carbon.

Two servers running at low utilization rates will consume more energy than one running at a high utilization rate. In addition, the unused capacity on the underutilized server could be more efficiently used for another task or process.

## Solution

Rightsize your compute resources to match the utilization requirements of your workload. Depending on your cloud platform capabilities, you can use one of the following approaches:

### Approach 1: Adjust VM Resources Dynamically

Change the number of resources allocated to a VM to match utilization requirements. For example:
- Add a vCPU if the VM is running high CPU utilization
- Remove memory if the server is not using all of its allocated memory
- Adjust disk I/O capacity to match actual requirements

This approach works when your platform supports dynamic resource allocation for running VMs.

### Approach 2: Select Pre-configured Server SKUs

Select a different pre-configured server instance type (SKU) that better matches the utilization requirements of the process. Cloud providers offer various instance types optimized for different workload patterns:
- Compute-optimized instances for CPU-intensive workloads
- Memory-optimized instances for data-intensive applications
- General-purpose instances for balanced workloads

This approach is used when selecting from preset instance configurations offered by your cloud provider.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Rightsizing oversized VMs will impact SCI as follows:

- `E`: Rightsizing oversized VMs will *increase* the total server utilization. The more a server is utilized, the more efficient it becomes at turning energy into useful operations. Therefore rightsizing VMs should reduce the energy consumption of your processes.
- `M`: By reducing the total number of servers required to run a process, the total embodied carbon is lower.

## Assumptions

If we choose an oversized VM because *occasionally* there is a burst of work (peak load) then undersizing them will reduce the margin available to handle the peak traffic. A better solution would be to consider an auto-scaling architecture that would automatically scale the number of VMs.

## Considerations

- It may reduce your cloud bill as reducing the spec of your VMs will cost less.
- If you do not have an auto-scaling architecture, there is less overhead for handling spikes in load.
- Some platforms support live resizing of resources, while others require VM restarts.
- Monitor utilization patterns over time to identify the optimal resource configuration.

## References

- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
