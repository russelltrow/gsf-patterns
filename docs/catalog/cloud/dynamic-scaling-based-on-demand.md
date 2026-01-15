---
version: 1.0
submitted_by: franziska-nttdata-hesselfeld, yelghali
published_date: 2023-12-14
category: operations
description: Demand for resources depends on user load at any given time. However, most applications run without taking this into consideration, resulting in underused and inefficient resources. Scaling infrastructure dynamically based on actual demand eliminates excess capacity and improves efficiency.
tags:
 - compute
 - cloud
 - serverless
 - kubernetes
 - role:cloud-engineer
 - role:software-engineer
 - size:medium
---

# Dynamic scaling based on demand

## Description

Demand for resources depends on user load at any given time. However, most applications run without taking this into consideration, resulting in underused and inefficient resources. By scaling infrastructure dynamically based on actual demand, whether through predictable time patterns or reactive metrics, you can eliminate excess capacity and improve both energy and hardware efficiency.

## Solution

Implement dynamic scaling using one or both of the following complementary approaches:

### Approach 1: Time-Based Scaling for Predictable Patterns

Review workloads for predictable patterns and identify periods of low or no activity where resources can be scaled back:
- Inspect CPU load over time to identify underutilized resources
- Scale back resources during periods of low utilization (e.g., nights, weekends for business applications)
- Consolidate underutilized Virtual Machines
- Shut down resources on a schedule when not needed
- Remove permanently idle resources

This approach works best when traffic patterns are predictable and consistent. Scaling based on time is simpler to implement and requires less sophisticated monitoring infrastructure.

### Approach 2: Metrics-Driven Scaling for Reactive Demand

Scale infrastructure based on actual demand metrics that directly correlate with your application's load:

**Demand Metrics Examples:**
- HTTP request rates
- Message queue length
- Database connection pools
- Custom business metrics (e.g., active user sessions)
- Cloud alerting events

**Implementation:**
- Implement custom scalers tailored to your application's demand drivers
- Use platform-specific tools (e.g., AWS Auto Scaling, Azure Auto Scale, GCP Autoscaler)
- For Kubernetes: Use [KEDA (Kubernetes Event-Driven Autoscaling)](https://keda.sh) to build event-driven applications
- Enable scaling down to zero when there is no demand (supported by KEDA and serverless platforms)
- Implement cluster auto-scaling and bursting capabilities to scale infrastructure based on pod demand

**Why metrics-driven scaling?** By default, platforms like Kubernetes scale based on CPU and RAM utilization. However, it's often difficult to correlate your application's actual demand drivers with CPU and RAM utilization. Scaling on relevant metrics provides more precise resource allocation.

### Combined Strategy

For optimal efficiency, use both approaches:
- Time-based scaling for known low-traffic periods
- Metrics-driven scaling for handling variable demand during active hours
- This combination ensures resources are right-sized at all times

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Dynamic scaling based on demand impacts SCI as follows:

- `E`: Reduces electricity consumed by running only the resources needed for current demand
- `M`: Reduces embodied carbon emissions by decreasing the total amount of hardware required to support the workload

## Assumptions

- For time-based scaling: Traffic patterns are predictable and consistent enough to define a schedule
- For metrics-driven scaling: The metrics that drive application demand and scaling needs are known and measurable
- The application architecture supports scaling (stateless or with proper state management)

## Considerations

- Consider starting with the easiest optimizations first (time-based scaling is simpler to implement)
- If workloads have predictable usage patterns, time-based scaling may be sufficient and simpler than metrics-driven approaches
- Metrics-driven scaling requires more sophisticated monitoring and configuration but provides better responsiveness to demand changes
- Account for scaling delays (cold starts) when sizing minimum capacity
- Test scaling behavior under various load conditions to ensure performance requirements are met
- For Kubernetes: Combine horizontal pod autoscaling (HPA/KEDA) with cluster autoscaling for complete infrastructure optimization

## References

- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a2.html)
- [KEDA - Kubernetes Event-Driven Autoscaling](https://keda.sh)
- [Software Carbon Intensity Spec](https://grnsft.org/sci)
