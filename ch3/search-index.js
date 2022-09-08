var searchIndex = JSON.parse('{\
"os":{"doc":"The main module and entrypoint","t":[0,5,0,0,0,0,14,14,5,0,0,0,0,0,0,17,17,17,17,17,8,17,3,17,12,11,11,10,11,5,10,11,10,11,11,11,11,11,11,11,17,17,2,17,17,17,3,11,11,11,11,5,11,11,11,11,5,7,3,7,3,11,11,11,11,11,11,12,12,11,11,5,5,11,11,5,11,11,5,11,11,11,11,11,11,11,17,17,5,5,5,5,2,0,3,11,11,11,11,12,11,11,11,11,11,17,17,17,17,0,0,5,17,5,5,5,5,3,3,3,3,12,11,11,11,11,11,11,0,12,11,5,11,11,11,11,12,11,11,11,5,11,5,11,12,12,5,11,5,11,12,12,5,0,0,12,11,11,11,11,11,11,11,11,11,3,11,11,11,11,11,11,12,12,12,11,11,11,11,5,13,13,13,3,4,13,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,17,17,5,5,5,3,0,5,5,12,12,5,12,3,11,11,11,11,11,12,11,12,11,11,11,12],"n":["board","clear_bss","config","console","lang_items","loader","print","println","rust_main","sbi","sync","syscall","task","timer","trap","CLOCK_FREQ","EXIT_FAILURE","EXIT_FAILURE_FLAG","EXIT_RESET","EXIT_SUCCESS","QEMUExit","QEMU_EXIT_HANDLE","RISCV64","VIRT_TEST","addr","borrow","borrow_mut","exit","exit","exit_code_encode","exit_failure","exit_failure","exit_success","exit_success","from","into","new","try_from","try_into","type_id","APP_BASE_ADDRESS","APP_SIZE_LIMIT","CLOCK_FREQ","KERNEL_STACK_SIZE","MAX_APP_NUM","USER_STACK_SIZE","Stdout","borrow","borrow_mut","from","into","print","try_from","try_into","type_id","write_str","panic","KERNEL_STACK","KernelStack","USER_STACK","UserStack","borrow","borrow","borrow_mut","borrow_mut","clone","clone","data","data","from","from","get_base_i","get_num_app","get_sp","get_sp","init_app_cx","into","into","load_apps","push_context","try_from","try_from","try_into","try_into","type_id","type_id","SBI_CONSOLE_PUTCHAR","SBI_SET_TIMER","console_putchar","sbi_call","set_timer","shutdown","UPSafeCell","up","UPSafeCell","borrow","borrow_mut","exclusive_access","from","inner","into","new","try_from","try_into","type_id","SYSCALL_EXIT","SYSCALL_GET_TIME","SYSCALL_WRITE","SYSCALL_YIELD","fs","process","syscall","FD_STDOUT","sys_write","sys_exit","sys_get_time","sys_yield","TASK_MANAGER","TaskContext","TaskManager","TaskManagerInner","__private_field","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","context","current_task","deref","exit_current_and_run_next","find_next_task","from","from","from","inner","into","into","into","mark_current_exited","mark_current_exited","mark_current_suspended","mark_current_suspended","num_app","ra","run_first_task","run_first_task","run_next_task","run_next_task","s","sp","suspend_current_and_run_next","switch","task","tasks","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","TaskContext","borrow","borrow_mut","clone","from","goto_restore","into","ra","s","sp","try_from","try_into","type_id","zero_init","__switch","Exited","Ready","Running","TaskControlBlock","TaskStatus","UnInit","borrow","borrow","borrow_mut","borrow_mut","clone","clone","eq","from","from","into","into","task_cx","task_status","try_from","try_from","try_into","try_into","type_id","type_id","MSEC_PER_SEC","TICKS_PER_SEC","get_time","get_time_ms","set_next_trigger","TrapContext","context","enable_timer_interrupt","init","sepc","sstatus","trap_handler","x","TrapContext","app_init_context","borrow","borrow_mut","from","into","sepc","set_sp","sstatus","try_from","try_into","type_id","x"],"q":["os","","","","","","","","","","","","","","","os::board","","","","","","","","","","","","","","","","","","","","","","","","","os::config","","","","","","os::console","","","","","","","","","","os::lang_items","os::loader","","","","","","","","","","","","","","","","","","","","","","","","","","","","","os::sbi","","","","","","os::sync","","os::sync::up","","","","","","","","","","","os::syscall","","","","","","","os::syscall::fs","","os::syscall::process","","","os::task","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","os::task::context","","","","","","","","","","","","","","os::task::switch","os::task::task","","","","","","","","","","","","","","","","","","","","","","","","","os::timer","","","","","os::trap","","","","","","","","os::trap::context","","","","","","","","","","","",""],"d":["Constants used in rCore for qemu","clear BSS segment","Constants used in rCore","SBI console driver, for text output","The panic handler","Loading user applications into memory","print string macro","println string macro","the rust entry-point of os","SBI call wrappers","Synchronization and interior mutability primitives","Implementation of syscalls","Task management implementation","RISC-V timer-related functionality","Trap handling functionality","","","","","","","","RISCV64 configuration","","Address of the sifive_test mapped device.","","","Exit with specified return code.","Exit qemu with specified exit code.","Encode the exit code using EXIT_FAILURE_FLAG.","Exit QEMU using <code>EXIT_FAILURE</code>, aka <code>1</code>.","","Exit QEMU using <code>EXIT_SUCCESS</code>, aka <code>0</code>, if possible.","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Create an instance.","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Get base address of app i.","Get the total number of applications.","","","get app info with entry and sp and save <code>TrapContext</code> in …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Load nth user app at [APP_BASE_ADDRESS + n * …","","","","","","","","","","use sbi call to putchar in console (qemu uart handler)","handle SBI call with <code>which</code> SBI_id and other arguments","use sbi call to set timer","use sbi call to shutdown the kernel","","Uniprocessor interior mutability primitives","Wrap a static data structure inside it so that we are able …","","","Exclusive access inner data in UPSafeCell. Panic if the …","Returns the argument unchanged.","inner data","Calls <code>U::from(self)</code>.","User is responsible to guarantee that inner struct is only …","","","","","","","","File and filesystem-related syscalls","Process management syscalls","handle syscall exception with <code>syscall_id</code> and other …","","write buf of length <code>len</code>  to a file with <code>fd</code>","task exits and submit an exit code","get time in milliseconds","current task gives up resources for other tasks","Global variable: TASK_MANAGER","Task Context","The task manager, where all the tasks are managed.","Inner of Task Manager","","","","","","","","Implementation of <code>TaskContext</code>","id of current <code>Running</code> task","","exit current task,  then run next task","Find next task to run and return task id.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","use inner value to get mutable access","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","exit current task","Change the status of current <code>Running</code> task into <code>Exited</code>.","suspend current task","Change the status of current <code>Running</code> task into <code>Ready</code>.","total number of tasks","return address ( e.g. __restore ) of __switch ASM function","run first task","Run the first task in task list.","rust next task","Switch current <code>Running</code> task to the task we have found, or …","callee saved registers:  s 0..11","kernel stack pointer of app","suspend current task, then run next task","Rust wrapper around <code>__switch</code>.","Types related to task management","task list","","","","","","","","","","Task Context","","","","Returns the argument unchanged.","set task context {__restore ASM funciton, kernel stack, …","Calls <code>U::from(self)</code>.","return address ( e.g. __restore ) of __switch ASM function","callee saved registers:  s 0..11","kernel stack pointer of app","","","","init task context","Switch to the context of <code>next_task_cx_ptr</code>, saving the …","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","read the <code>mtime</code> register","get current time in milliseconds","set the next timer interrupt","Trap Context","","timer interrupt enabled","initialize CSR <code>stvec</code> as the entry of <code>__alltraps</code>","CSR sepc","CSR sstatus      ","handle an interrupt, exception, or system call from user …","general regs[0..31]","Trap Context","init app context","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","CSR sepc","set stack pointer to x_2 reg (sp)","CSR sstatus      ","","","","general regs[0..31]"],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,28,3,0,28,3,28,3,3,3,3,3,3,3,0,0,0,0,0,0,0,8,8,8,8,0,8,8,8,8,0,0,0,0,0,12,13,12,13,12,13,12,13,12,13,0,0,12,13,0,12,13,0,12,12,13,12,13,12,13,0,0,0,0,0,0,0,0,0,16,16,16,16,16,16,16,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,29,21,22,29,21,0,29,21,0,22,22,29,21,22,22,29,21,0,22,0,22,22,24,0,22,0,22,24,24,0,0,0,29,22,29,21,22,29,21,22,29,21,0,24,24,24,24,24,24,24,24,24,24,24,24,24,0,26,26,26,0,0,26,25,26,25,26,25,26,26,25,26,25,26,25,25,25,26,25,26,25,26,0,0,0,0,0,0,0,0,0,15,15,0,15,0,15,15,15,15,15,15,15,15,15,15,15,15],"f":[0,[[]],0,0,0,0,0,0,[[],1],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[2,1],[[3,2],1],[2,2],[[],1],[3,1],[[],1],[3,1],[[]],[[]],[4,3],[[],5],[[],5],[[],6],0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[7],[[],5],[[],5],[[],6],[[8,9],10],[11,1],0,0,0,0,[[]],[[]],[[]],[[]],[12,12],[13,13],0,0,[[]],[[]],[14,14],[[],14],[12,14],[13,14],[14,14],[[]],[[]],[[]],[[12,15],14],[[],5],[[],5],[[],5],[[],5],[[],6],[[],6],0,0,[14],[[14,14,14,14],14],[14],[[],1],0,0,0,[[]],[[]],[16,17],[[]],0,[[]],[[],16],[[],5],[[],5],[[],6],0,0,0,0,0,0,[14,18],0,[[14,19,14],18],[20,1],[[],18],[[],18],0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],0,0,[21,22],[[]],[22,[[23,[14]]]],[[]],[[]],[[]],0,[[]],[[]],[[]],[[]],[22],[[]],[22],0,0,[[]],[22,1],[[]],[22],0,0,[[]],0,0,0,[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],6],[[],6],[[],6],0,[[]],[[]],[24,24],[[]],[14,24],[[]],0,0,0,[[],5],[[],5],[[],6],[[],24],0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[25,25],[26,26],[[26,26],27],[[]],[[]],[[]],[[]],0,0,[[],5],[[],5],[[],5],[[],5],[[],6],[[],6],0,0,[[],14],[[],14],[[]],0,0,[[]],[[]],0,0,[15,15],0,0,[[14,14],15],[[]],[[]],[[]],[[]],0,[[15,14]],0,[[],5],[[],5],[[],6],0],"p":[[15,"never"],[15,"u32"],[3,"RISCV64"],[15,"u64"],[4,"Result"],[3,"TypeId"],[3,"Arguments"],[3,"Stdout"],[15,"str"],[6,"Result"],[3,"PanicInfo"],[3,"KernelStack"],[3,"UserStack"],[15,"usize"],[3,"TrapContext"],[3,"UPSafeCell"],[3,"RefMut"],[15,"isize"],[15,"u8"],[15,"i32"],[3,"TASK_MANAGER"],[3,"TaskManager"],[4,"Option"],[3,"TaskContext"],[3,"TaskControlBlock"],[4,"TaskStatus"],[15,"bool"],[8,"QEMUExit"],[3,"TaskManagerInner"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
