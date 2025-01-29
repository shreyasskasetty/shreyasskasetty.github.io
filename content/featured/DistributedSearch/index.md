---
date: '3'
title: 'Distributed Search'
cover: './architecture.jpg'
github: 'https://github.com/shreyasskasetty/distributed-search'
external: ''
tech:
  - Java
  - TFIDF
  - Zookeeper
  - Protobuffer
  - gRPC
  - React
  - Information Retrieval
  - Distributed Systems
  - Leader Election
  - Service Registry
---

Designed and implemented a fault-tolerant distributed search cluster from the ground up using
Java and Apache Zookeeper for distributed coordination. The system features a Leader Election
algorithm to dynamically assign master nodes and a Service Registry to track active worker
instances. Core functionality includes TF-IDF-based document search, where term frequency-inverse
document frequency calculations are parallelized across worker nodes for scalable processing. To
ensure resilience, the cluster automatically triggers leader re-election upon node failure,
maintaining uninterrupted operations
