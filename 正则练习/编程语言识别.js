function processData(input) {
    console.log(identifyLanguage(input));
} 

var langPatterns = {
    C: [
        /#(include.*?>|define.*)/g, //cPreprocessor
        /\b(typedef.*?;|struct.*?(?=\s*?\{))/g, //cStruct
        /\b\w+\s*->\s*\w+\b/g, //cPointers
        /[a-zA-Z]+\s+\*\s+([a-zA-Z_]\w*)\s*\([a-zA-Z]*\s*([a-zA-Z_]\w*)\)\s*\{/g, //cFunctionPointerReturn
        /[a-zA-Z]+\s*\*?\s*([a-zA-Z_]\w*)\(.*[a-zA-Z]+\s*\*\s*([a-zA-Z_]\w*).*\)\s*\{/g //cFunctionPointerArg
    ],
    Java: [
        /\bimport\s*.*?;/g, //javaImport
        /(public|private)?\s*class.*?\{/g //javaClass
    ],
    Python: [
        /(class|def|if|while|else|for).*:/g, //pythonKeywords
        /\[((\d+|("|').+\3),)*(\d+|("|').+\5)\]/g, //pythonLists
        /\bprint(\s*("|').+\2|\(.*\))/g, //pythonPrint
        ///True|False/g //pythonBoolean
    ],
}

var identifyLanguage = function (code) {
    //Object.keys 遍历出所有key值，C Java Python
    //find 查找符合条件的元素
    //some 只有元素中有一个匹配，则返回true
    return Object.keys(langPatterns).find(lang => langPatterns[lang].some(pattern => pattern.test(code)))
}


processData(C)


var C = `#include<stdio.h>
/* Logic : Do the following thing until the list is sorted
            (i) Compare two adjacent elements and check if they are in correct order(that is second one has
                to be greater than the first). 
            (ii) Swap them if they are not in correct order.
 */ 
void BubbleSort(int *array,int number_of_elements)
{
        int iter, temp, swapped;
        do
        {
                swapped = 0; /* If no element is swapped array is sorted */
                /* In the following loop compare every pair of adjacent elements and check
                   if they are in correct order */
                for(iter = 1; iter < number_of_elements; iter++)
                {
                        if(array[iter-1] > array[iter])
                        {
                                temp = array[iter-1];
                                array[iter-1] = array[iter];
                                array[iter] = temp;
                                swapped = 1;
                        }
                }

        }while(swapped);
}
int main()
{
        int number_of_elements;
        scanf("%d",&number_of_elements);
        int array[number_of_elements]; 
        int iter;
        for(iter = 0;iter < number_of_elements;iter++)
        {
                scanf("%d",&array[iter]);
        }
        /* Calling this functions sorts the array */
        BubbleSort(array,number_of_elements); 
        for(iter = 0;iter < number_of_elements;iter++)
        {
                printf("%d ",array[iter]);
        }
        printf("\n");
        return 0;

}


@@@@

Insertion Sort - C Program Source Code

#include<stdio.h>
/* Logic : Suppose if the array is sorted till index i then we can sort the arry till i+1 by inserting 
           i+1 th element in the correct position from 0 to i+1. The position at which (i+1)th element has 
           to be inserted has to be found by iterating from 0 to i. As any array is sorted till 0th postion 
           (Single element is always sorted) and we know how to expand, we can sort the whole array
 */ 
void InsertionSort(int *array , int number_of_elements)
{
        int iter,jter;
        for(iter=1;iter<number_of_elements;iter++)
        {
                int current_element = array[iter];
                jter = iter-1;
                while(jter>=0 && array[jter] > current_element)
                {
                        array[jter+1] = array[jter];
                        jter--;
                }
                array[jter+1] = current_element;
        }
}
int main()
{
        int number_of_elements;
        scanf("%d",&number_of_elements);
        int array[number_of_elements]; 
        int iter;
        for(iter = 0;iter < number_of_elements;iter++)
        {
                scanf("%d",&array[iter]);
        }
        /* Calling this functions sorts the array */
        InsertionSort(array,number_of_elements); 
        for(iter = 0;iter < number_of_elements;iter++)
        {
                printf("%d ",array[iter]);
        }
        printf("\n");
        return 0;
}


@@@@

#include<stdio.h>
#include<assert.h>
/* maxVertices represents maximum number of vertices that can be present in the graph. */
#define maxVertices   100
void Dfs(int graph[][maxVertices], int *size, int presentVertex,int *visited)
{
        printf("Now visiting vertex %d\n",presentVertex);
        visited[presentVertex] = 1;
        /* Iterate through all the vertices connected to the presentVertex and perform dfs on those
           vertices if they are not visited before */
        int iter;
        for(iter=0;iter<size[presentVertex];iter++)
        {
                if(!visited[graph[presentVertex][iter]])
                {
                        Dfs(graph,size,graph[presentVertex][iter],visited);
                }
        }
        return;
        

}
/* Input Format: Graph is directed and unweighted. First two integers must be number of vertces and edges 
   which must be followed by pairs of vertices which has an edge between them. */
int main()
{
        int graph[maxVertices][maxVertices],size[maxVertices]={0},visited[maxVertices]={0};
        int vertices,edges,iter;
        /* vertices represent number of vertices and edges represent number of edges in the graph. */
        scanf("%d%d",&vertices,&edges);
        int vertex1,vertex2;
        for(iter=0;iter<edges;iter++)
        {
                scanf("%d%d",&vertex1,&vertex2);
                assert(vertex1>=0 && vertex1<vertices);
                assert(vertex2>=0 && vertex2<vertices);
                graph[vertex1][size[vertex1]++] = vertex2;
        }
        int presentVertex;
        for(presentVertex=0;presentVertex<vertices;presentVertex++)
        {
                if(!visited[presentVertex])
                {
                        Dfs(graph,size,presentVertex,visited);
                }
        }
        return 0;



}

@@@@

#include<stdio.h>
#include<stdlib.h>
#include<assert.h>
/* maxVertices represents maximum number of vertices that can be present in the graph. */
#define maxVertices   100
/*Queue has five properties. capacity stands for the maximum number of elements Queue can hold.
  Size stands for the current size of the Queue and elements is the array of elements. front is the
 index of first element (the index at which we remove the element) and rear is the index of last element
 (the index at which we insert the element) */
typedef struct Queue
{
        int capacity;
        int size;
        int front;
        int rear;
        int *elements;
}Queue;
/* crateQueue function takes argument the maximum number of elements the Queue can hold, creates
   a Queue according to it and returns a pointer to the Queue. */
Queue * CreateQueue(int maxElements)
{
        /* Create a Queue */
        Queue *Q;
        Q = (Queue *)malloc(sizeof(Queue));
        /* Initialise its properties */
        Q->elements = (int *)malloc(sizeof(int)*maxElements);
        Q->size = 0;
        Q->capacity = maxElements;
        Q->front = 0;
        Q->rear = -1;
        /* Return the pointer */
        return Q;
}
void Dequeue(Queue *Q)
{
        /* If Queue size is zero then it is empty. So we cannot pop */
        if(Q->size==0)
        {
                printf("Queue is Empty\n");
                return;
        }
        /* Removing an element is equivalent to incrementing index of front by one */
        else
        {
                Q->size--;
                Q->front++;
                /* As we fill elements in circular fashion */
                if(Q->front==Q->capacity)
                {
                        Q->front=0;
                }
        }
        return;
}
int Front(Queue *Q)
{
        if(Q->size==0)
        {
                printf("Queue is Empty\n");
                exit(0);
        }
        /* Return the element which is at the front*/
        return Q->elements[Q->front];
}
void Enqueue(Queue *Q,int element)
{
        /* If the Queue is full, we cannot push an element into it as there is no space for it.*/
        if(Q->size == Q->capacity)
        {
                printf("Queue is Full\n");
        }
        else
        {
                Q->size++;
                Q->rear = Q->rear + 1;
                /* As we fill the queue in circular fashion */
                if(Q->rear == Q->capacity)
                {
                        Q->rear = 0;
                }
                /* Insert the element in its rear side */ 
                Q->elements[Q->rear] = element;
        }
        return;
}



void Bfs(int graph[][maxVertices], int *size, int presentVertex,int *visited)
{
        visited[presentVertex] = 1;
        /* Iterate through all the vertices connected to the presentVertex and perform bfs on those
           vertices if they are not visited before */
        Queue *Q = CreateQueue(maxVertices);
        Enqueue(Q,presentVertex);
        while(Q->size)
        {
                presentVertex = Front(Q);
                printf("Now visiting vertex %d\n",presentVertex);
                Dequeue(Q);
                int iter;
                for(iter=0;iter<size[presentVertex];iter++)
                {
                        if(!visited[graph[presentVertex][iter]])
                        {
                                visited[graph[presentVertex][iter]] = 1;
                                Enqueue(Q,graph[presentVertex][iter]);
                        }
                }
        }
        return;
        

}
/* Input Format: Graph is directed and unweighted. First two integers must be number of vertces and edges 
   which must be followed by pairs of vertices which has an edge between them. */
int main()
{
        int graph[maxVertices][maxVertices],size[maxVertices]={0},visited[maxVertices]={0};
        int vertices,edges,iter;
        /* vertices represent number of vertices and edges represent number of edges in the graph. */
        scanf("%d%d",&vertices,&edges);
        int vertex1,vertex2;
        for(iter=0;iter<edges;iter++)
        {
                scanf("%d%d",&vertex1,&vertex2);
                assert(vertex1>=0 && vertex1<vertices);
                assert(vertex2>=0 && vertex2<vertices);
                graph[vertex1][size[vertex1]++] = vertex2;
        }
        int presentVertex;
        for(presentVertex=0;presentVertex<vertices;presentVertex++)
        {
                if(!visited[presentVertex])
                {
                        Bfs(graph,size,presentVertex,visited);
                }
        }
        return 0;



}

`