import linearTopology from './linear_topology.json';
import circleTopology from './circle_topology.json';
import treeTopology from './tree_topology.json';

type Bridge = number[][];

type InputData = {
	initialBridge: Bridge;
	amount: number;
	nodes: ClusterNode[];
};

type ClusterNode = {
	connections: number[];
	id: number;
};

function printAdjacencyMatrix(nodes: ClusterNode[], amount: number): void {

	function getConnectionValue(node: ClusterNode, nodeIndex: number) {
		return node.connections.includes(nodeIndex) ? { nodeId: nodeIndex, value: 1 } : { nodeId: nodeIndex, value: 0 };
	}

	const matrix = Array.from({ length: amount }, (_, i) => nodes.map((node) => getConnectionValue(node, i)));

	console.table(matrix.map((row) => row.map((cell) => cell.value)));
}

function scaleNodes(nodes: ClusterNode[], amount: number, bridge: Bridge): ClusterNode[] {
	const previousCluster = nodes.slice(nodes.length - amount);

	const scaledNodes = previousCluster
		.map((node) => ({ id: node.id + amount, connections: node.connections.map((connection) => connection + amount) }))
		.map(node => {
			for (let i = 0; i < bridge.length; i++) {
				for (let j = 0; j < bridge[i].length; j++) {
					if (node.id === bridge[i][j]) {
						return { ...node, connections: [...node.connections, bridge[i][j]] };
					}
					if (node.id === bridge[i][j]) {
						return { ...node, connections: [...node.connections, bridge[i][j]] };
					}
				}
			}
			return node;
		}) as ClusterNode[];

	return [...nodes, ...scaledNodes];
}

function getDegree(nodes: ClusterNode[]): number {
	return nodes.reduce((acc, node) => acc > node.connections.length ? acc : node.connections.length, 0);
}

function getCost(nodes: ClusterNode[]): number {
	return nodes.reduce((acc, node) => acc + node.connections.length, 0) / 2;
}

async function start() {
	const { initialBridge, amount, nodes }: InputData = treeTopology as InputData;

	printAdjacencyMatrix(nodes, amount);

	let scaleItetationsToBeDone = (() => {
		let iterations = 0;
		let nodesAmount = amount;

		while (nodesAmount != 21) {
			nodesAmount += amount;
			iterations++;
		}

		return iterations;
	})()

	let temp: ClusterNode[] = nodes;
	let currentBridge = initialBridge;

	for (let i = 0; i < scaleItetationsToBeDone; i++) {
		temp = scaleNodes(temp, amount, currentBridge);
		printAdjacencyMatrix(temp, temp.length);
		console.log(`Degree: ${getDegree(temp)}`);
		console.log(`Cost: ${getCost(temp)}`);
	}
}

start();
