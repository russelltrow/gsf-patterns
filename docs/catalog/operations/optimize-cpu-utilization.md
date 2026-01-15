---
version: 1.0
submitted_by: dubrie
published_date: 2022-11-10
category: operations
description: CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic.
tags:
 - compute
 - monitoring
 - cloud
 - role:cloud-engineer
 - role:software-engineer
 - role:reliability-engineer
 - size:medium
---

# Optimize CPU utilization

## Description

CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic.

## Solution

Optimize CPU utilization by addressing both average utilization levels and peak spikes. These complementary approaches work together to improve overall efficiency:

### Optimize Average CPU Utilization

Drive the average utilization value to an optimal level based on your system's characteristics:
- **If your system can scale quickly**: A higher average CPU utilization is ideal, allowing you to run closer to capacity
- **If your system cannot scale quickly**: Lower average CPU values provide additional buffer to support longer scale times

Monitor average CPU utilization to normalize traffic fluctuations and gain a better overall sense of system resource usage. This helps make hardware requirements more predictable.

### Reduce Peak CPU Utilization

Flatten CPU spikes by understanding the processes utilizing your CPU and optimizing the actions that drive increases:

**Identify spike causes**: Profile your application to find operations that drive CPU spikes. For example, loading a user's full profile might require dozens of database queries, data processing threads, and UI rendering.

**Apply optimization techniques**:
- **Add caching layers**: Cache frequently accessed data to reduce repeated computation
- **Reduce data transmission and rendering**: Send only necessary data to reduce processing overhead
- **Queue non-urgent requests**: Defer non-critical processing to off-peak times
- **Implement rate limiting**: Control request rates to prevent sudden spikes
- **Optimize algorithms**: Replace inefficient code with more performant implementations
- **Use asynchronous processing**: Move heavy operations to background workers

### Combined Approach

From both an energy efficiency and hardware efficiency perspective, optimizing CPU utilization reduces:
- Overall energy required to support traffic
- Amount of stand-by resources needed for spikes
- Total resources required, making system requirements more predictable

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing CPU utilization will impact SCI as follows:

- `E`: Reduces the amount of energy needed to support the system's traffic through reduced CPU requirements and fewer idle resources
- `M`: Reduces the amount of resources needed, which decreases the embodied carbon required to support the system

## Assumptions

- Traffic is expected to fluctuate during normal production usage because of external natural changes in how users consume
- Monitoring average CPU utilization helps normalize these fluctuations
- If CPU utilization spikes are caused by the system itself (bugs, inefficiencies), these should be addressed separately through code optimization

## Considerations

- There is no universal optimal CPU utilization value - this should be determined from the system and its specific requirements
- Avoid solving CPU utilization issues by simply adding more hardware to load balance, as this introduces additional embodied carbon
- The software practitioner should prioritize finding efficiencies within the system (code optimization, caching, better algorithms) before adding hardware
- Balance between resource utilization and system responsiveness based on your scaling capabilities

## References

- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
