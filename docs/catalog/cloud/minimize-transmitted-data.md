---
version: 1.0
submitted_by: greenhsu123
published_date: 2022-11-10
category: development
description: From an energy-efficiency perspective, it's better to minimize the size of the data transmitted so that less energy is required because the network traffic is reduced.
tags:
 - networking
 - cloud
 - role:cloud-engineer
 - role:software-engineer
 - size:small
---

# Minimize transmitted data size

## Description

From an energy-efficiency perspective, it's better to minimize the size of the data transmitted so that less energy is required because the network traffic is reduced.

## Solution

Minimize network traffic by applying both data reduction and compression techniques. These complementary approaches work together to achieve maximum efficiency:

### Approach 1: Reduce Data at the Application Layer

Curate the data being transmitted by only sending properties or values deemed necessary:
- Send only the specific fields required by the recipient
- Filter out unnecessary metadata or properties that can be correlated later
- Choose efficient data formats that are more compact (e.g., Protobuf is much more compact than XML, JSON is more compact than XML)
- Use pagination or streaming for large datasets rather than sending everything at once
- Implement field selection APIs that allow clients to request only needed properties

### Approach 2: Compress Data at the Transport Layer

Apply compression mechanisms to files or payloads before transmission:
- Use gzip, Brotli, or zstd compression for text-based data (JSON, HTML, CSS, JavaScript)
- Enable HTTP compression at the server and CDN level
- Compress binary files and payloads where appropriate
- Consider the compression-decompression energy tradeoff (modern compression algorithms are efficient enough that network savings outweigh computational cost)

**Best Practice**: Apply both approaches together. First reduce the data set to only what's necessary, then apply compression to the payload being transmitted. This maximizes bandwidth savings and energy efficiency.

## SCI Impact

`SCI = (E * I) + M per R`
[Software Carbon Intensity Spec](https://grnsft.org/sci)

Minimizing transmitted data size will impact SCI as follows:

- `E`: Reduces the total electricity required by reducing network traffic. While compression/decompression adds slight computational cost, the network energy savings typically outweigh this overhead.
- `I`: May have a slight increase in location-based marginal carbon emissions due to compressing and decompressing data at different locations, but this is generally offset by reduced transmission energy.
- `M`: By reducing the total size of data stored and transmitted, the total embodied carbon of network infrastructure is lower.

## Assumptions

- Rather than transferring complete data payloads because some properties might be needed later, a better approach is to curate the data set to send only necessary properties, with the ability to request additional data if needed
- Different data formats significantly affect network traffic - choose compact formats when possible
- Compression mechanisms are available and compatible on both client and server sides

## Considerations

- May reduce cloud bills because minimizing the size of the data transmitted costs less
- If data sets are minimized by removing properties, there may be overhead to correlate missing properties or request them separately
- If compressed assets cannot be properly decompressed, there is overhead to resend in alternative format
- Balance between data completeness and transmission efficiency should align with application requirements

## References

- [Energy Efficiency Principle](https://learn.greensoftware.foundation/practitioner/energy-efficiency)
