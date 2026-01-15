---
version: 1.0
submitted_by: yelghali, markus-ntt-seidl
published_date: 2023-12-14
category: operations
description: Applications consume CPU even when they are not actively in use. For example, background timers, garbage collection, health checks, etc. Even when the application is shut down, the underlying hardware is consuming idle power. This can also happen with development and test applications or hardware in out-of-office hours.
tags:
 - cloud
 - kubernetes
 - role:cloud-engineer
 - size:small
---

# Scale down applications when not in use

## Description

Applications consume CPU even when they are not actively in use. For example, background timers, garbage collection, health checks, etc. Even when the application is shut down, the underlying hardware is consuming idle power. This can happen with development and test applications or hardware during out-of-office hours.

## Solution

The best way to mitigate this is to scale down applications and hardware that are not in use on a schedule. Cloud vendors and software solutions provide various efficient ways of achieving this.

### General Approach

Scale down applications based on predictable usage patterns:
- **Development and test environments**: Shut down during out-of-office hours (nights, weekends)
- **Production applications**: Scale to minimal capacity during low-traffic periods if usage patterns are predictable
- **Scheduled scaling**: Use cloud provider scheduling tools or automation scripts to implement time-based scaling

### Kubernetes-Specific Implementation

For Kubernetes deployments, optimization can be implemented at different levels:

**Cluster-level optimization** (for Dev/Test environments):
- Turn off entire Kubernetes nodes (VMs) out of office hours
- Reduces both application and cluster infrastructure consumption

**Application-level optimization** (for production environments):
- Scale down Kubernetes applications (Deployments, StatefulSets) based on time
- Scale pods to zero when not in use
- Select resources using Labels or Annotations for automated scaling policies
- Keep cluster nodes running but eliminate unnecessary pod resource consumption

This approach does not require application code changes but requires understanding of application usage patterns, including technical governance and inventory management.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Scaling down applications when not in use will impact SCI as follows:

- `E`: Energy consumption is reduced during the hours when the application and hardware are shut down or switched off, eliminating both active processing and idle power consumption

## Assumptions

- Assumes that the application has predictable traffic or usage patterns, which should be known in advance
- The business can tolerate the application being unavailable or at reduced capacity during off-hours
- Startup time for scaled-down applications is acceptable for the use case

## Considerations

- Consider moving to a serverless architecture, which automatically scales to zero when not in use without manual scheduling
- Balance between energy savings and application availability requirements
- Monitor usage patterns to identify optimal scaling schedules
- Account for time zone differences for globally distributed applications
- Consider gradual scale-up before peak periods to avoid cold-start performance issues

## References

- [Azure Well-Architected Framework Sustainability Pillar](https://learn.microsoft.com/en-us/azure/architecture/framework/sustainability/sustainability-application-design)
- [Software Carbon Intensity Spec](https://grnsft.org/sci)
