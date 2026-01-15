---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: operations
description: From an embodied carbon perspective, it's better to identify and remove unused storage resources and implement automated retention policies so we are efficient with hardware and ensure the storage layer is optimized for the task.
tags:
 - storage
 - cloud
 - role:cloud-engineer
 - size:small
---

# Optimize storage resource utilization

## Description

From an embodied carbon perspective, it's better to identify and remove unused storage resources so we are efficient with hardware and ensure the storage layer is optimized for the task. Storing unused resources permanently wastes storage capacity and the embodied carbon of the underlying hardware.

## Solution

Monitor and analyze your application and cloud infrastructure to identify storage resources that are no longer used or can be reduced. Then apply one or more of the following complementary approaches:

### Approach 1: Delete Unused Storage Resources

Delete any unused storage resource (volumes, disks, snapshots) that is no longer needed. This is a direct, tactical approach to free up consumed resources immediately.

### Approach 2: Consolidate and Optimize Storage

Decommission and consolidate underutilized storage assets:
- Consolidate multiple database instances with only a few tables into a single instance
- Review generated assets (logs, backups, reports) for redundant content and handle accordingly
- Inspect storage buckets and remove unused or duplicate assets
- Compress data where appropriate to reduce storage footprint

### Approach 3: Implement Automated Retention Policies (Recommended)

Set retention policies on storage resources to automate the deletion of unused or expired storage based on business needs. This approach:
- Eliminates manual overhead of identifying and deleting idle resources
- Ensures consistent application of retention rules
- Automatically manages storage lifecycle without intervention
- Balances data retention requirements with storage efficiency

For long-term storage optimization, automated retention policies are the preferred solution as they prevent accumulation of unused resources and reduce operational burden.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Optimizing storage resource utilization will impact SCI as follows:

- `E`: Reduces electricity consumption by not powering unused storage resources
- `M`: By reducing the total number of storage volumes and resources required, we reduce the total embodied carbon of the infrastructure

## Assumptions

- Assumes that storage resources can be safely decommissioned after appropriate review
- If resources might be needed in the future, retention policies provide a better balance than permanent storage or complete deletion
- Storage optimization should align with business data retention requirements and compliance policies

## Considerations

- May reduce cloud bills, as reducing idle storage resources costs less
- Manual deletion carries risk of losing access to data that might be needed in the future
- Consider creating monitoring dashboards to more easily identify resources that are no longer needed
- Automated retention policies should be defined according to business requirements before implementation
- Document retention policies and ensure stakeholders understand data lifecycle management

## References

- [Hardware Efficiency Principle](https://learn.greensoftware.foundation/practitioner/hardware-efficiency)
- [AWS Sustainability Pillar](https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sus_sus_user_a4.html)
